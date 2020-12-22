"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var LinkedList_1 = __importStar(require("./LinkedList"));
var NumberCollection_1 = __importDefault(require("./NumberCollection"));
var Sorter_1 = __importDefault(require("./Sorter"));
var numberCollection = new NumberCollection_1.default([1, -1, 4, 0, 6, 4, 3]);
var characterCollection = new CharactersCollection_1.default('xyzABC');
var collectionNumber = new Sorter_1.default(numberCollection);
var collectionCharacter = new Sorter_1.default(characterCollection);
var node = new LinkedList_1.Node(1);
var node_ = new LinkedList_1.Node(2);
var node__ = new LinkedList_1.Node(3);
var linkedList = new LinkedList_1.default();
linkedList.push(node);
linkedList.push(node_);
linkedList.push(node__);
// console.log((linkedList))
linkedList.print();
collectionNumber.sort();
collectionCharacter.sort();
