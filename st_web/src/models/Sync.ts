import axios, { AxiosPromise, AxiosResponse } from "axios";
interface HasId {
    id?: number,
}
class Sync<T extends HasId> {
    constructor(public rootUrl: string) { }
    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.rootUrl}/${id}`)
            .then((res: AxiosResponse) => {
                return res.data
            })
    }
    save(data: T): AxiosPromise<T> {
        const { id } = data
        if (data.id) {
            return axios.put(`${this.rootUrl}/${data.id}`, data).then((res: AxiosResponse) => res.data)
        }
        return axios.post(`${this.rootUrl}`, data).then((res: AxiosResponse) => res.data)
    }

}
export default Sync