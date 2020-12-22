class CharactersCollection {
    public collection: string[]
    constructor(public data: string) {
        this.data = data;
        this.collection = data.split('')
    }
    get length(): number {
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = leftHand;
        this.data = this.collection.join('')
    }
}
export default CharactersCollection