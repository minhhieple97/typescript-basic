import CharactersCollection from "./CharactersCollection";
import LinkedList, { Node } from "./LinkedList";
import NumberCollection from "./NumberCollection"
import Sorter from "./Sorter"
const numberCollection = new NumberCollection([1, -1, 4, 0, 6, 4, 3]);
const characterCollection = new CharactersCollection('xyzABC')
const collectionNumber = new Sorter(numberCollection)
const collectionCharacter = new Sorter(characterCollection)
const node = new Node(1);
const node_ = new Node(2);
const node__ = new Node(3);
const linkedList = new LinkedList();
linkedList.push(node)
linkedList.push(node_)
linkedList.push(node__)
// console.log((linkedList))
linkedList.print()
collectionNumber.sort()
collectionCharacter.sort()