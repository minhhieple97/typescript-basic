export type Mappable = {
    location: {
        lat: number,
        lng: number
    },
    contentMarker(): string,
    color: string
}
export default class CustomMap {
    private info: google.maps.InfoWindow
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
    addMarket(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.contentMarker()
            });
            infoWindow.open(this.googleMap, marker)
        })
    }
}
