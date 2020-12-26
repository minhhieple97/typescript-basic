"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Sorter_1 = __importDefault(require("./Sorter"));
var Node = /** @class */ (function () {
    function Node(val) {
        this.val = val;
        this.val = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.longs = 0;
        _this.head = null;
        _this.tail = null;
        return _this;
    }
    LinkedList.prototype.push = function (node) {
        if (this.tail && this.head) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.longs += 1;
    };
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.longs || this.longs === 0)
            return null;
        var result = this.head;
        var checking = 0;
        while (result) {
            if (checking === position) {
                break;
            }
            checking++;
            result = result.next;
        }
        return result;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        var nodeLeft = this.get(leftIndex);
        var nodeRight = this.get(rightIndex);
        if (nodeLeft && nodeRight)
            return nodeLeft.val > nodeRight.val;
        return false;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var nodeLeft = this.get(leftIndex);
        var nodeRight = this.get(rightIndex);
        if (nodeLeft && nodeRight) {
            var tmp = nodeLeft.val;
            nodeLeft.val = nodeRight.val;
            nodeRight.val = tmp;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.longs;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var result = this.head;
        while (result) {
            console.log({ result: result });
            result = result.next;
        }
    };
    return LinkedList;
}(Sorter_1.default));
exports.default = LinkedList;
