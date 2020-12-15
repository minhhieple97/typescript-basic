import axios from 'axios';
const obj = {}
const url = 'https://jsonplaceholder.typicode.com/todos/1';
type Todo = {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}
axios.get(url).then((res) => {
    const todo = (res.data) as Todo
    // Có thể viết const todo: Todo = (res.data) hoặc const todo = (res.data) as Todo 2 cách viết này tương đương nhau
    const { id, userId, title, completed } = todo;
    console.log(id, userId, title, completed);
})
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(id, title, completed)
}

