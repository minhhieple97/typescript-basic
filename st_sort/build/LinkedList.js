"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(val) {
        this.val = val;
        this.val = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.longs = 0;
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.push = function (node) {
        if (this.tail && this.head) {
            if (this.length === 1) {
                this.head.next = this.tail;
                this.tail = node;
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
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
            console.log('val', result.val);
            result = result.next;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
