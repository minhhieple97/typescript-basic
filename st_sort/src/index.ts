import CharactersCollection from "./CharactersCollection";
import LinkedList, { Node } from "./LinkedList";
import NumberCollection from "./NumberCollection"

const numberCollection = new NumberCollection([1, -1, 4, 0, 6, 4, 3]);
const characterCollection = new CharactersCollection('xyzABC');
characterCollection.sort()
const node1 = new Node(500);
const node2 = new Node(-10);
const node3 = new Node(-3);
const node4 = new Node(4);
const linkedList = new LinkedList();
linkedList.push(node1);
linkedList.push(node2);
linkedList.push(node3);
linkedList.push(node4);
// const sortedLinkedList = new Sorter(linkedList);
// sortedLinkedList.sort();
linkedList.sort()
linkedList.print();

numberCollection.sort()
