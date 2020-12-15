"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = (res.data);
    var id = todo.id, userId = todo.userId, title = todo.title, completed = todo.completed;
    console.log(id, userId, title, completed);
});
