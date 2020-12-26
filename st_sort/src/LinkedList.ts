import Sorter from "./Sorter";

class Node {
    public next: Node | null
    constructor(public val: number) {
        this.val = val;
        this.next = null
    }
}
export { Node }
class LinkedList extends Sorter {
    private longs: number = 0;
    public head: Node | null = null
    public tail: Node | null = null
    push(node: Node): void {
        if (this.tail && this.head) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.longs += 1
    }
    get(position: number): Node | null {
        if (position < 0 || position >= this.longs || this.longs === 0) return null
        let result = this.head;
        let checking = 0;
        while (result) {
            if (checking === position) {
                break;
            }
            checking++;
            result = result.next
        }
        return result
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        const nodeLeft = this.get(leftIndex);
        const nodeRight = this.get(rightIndex);
        if (nodeLeft && nodeRight) return nodeLeft.val > nodeRight.val
        return false
    }
    swap(leftIndex: number, rightIndex: number): void {
        const nodeLeft = this.get(leftIndex);
        const nodeRight = this.get(rightIndex);
        if (nodeLeft && nodeRight) {
            const tmp = nodeLeft.val;
            nodeLeft.val = nodeRight.val;
            nodeRight.val = tmp
        }
    }
    get length(): number {
        return this.longs
    }
    print(): void {
        if (!this.head) {
            return
        }
        let result: Node | null = this.head;
        while (result) {
            console.log({ result })
            result = result.next;
        }
    }
}
export default LinkedList