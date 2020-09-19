import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Array<Todo> = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const { text, description } = req.body as {
    text: string;
    description: string;
  };
  const newTodo = new Todo(Math.random().toString(), text, description);
  TODOS.push(newTodo);
  res.json({ message: "Create to do success." });
};
export const getTodo: RequestHandler = (req, res, next) => {
  const { text, description } = req.body as {
    text: string;
    description: string;
  };
  const newTodo = new Todo(Math.random().toString(), text, description);
  TODOS.push(newTodo);
  res.json({ status: 200, data: TODOS });
};
export const updateTodo: RequestHandler = (req, res, next) => {
  const { text, description } = req.body as {
    text: string;
    description: string;
  };
  const { id: todoId } = req.params as { id: string };
  const todoIndex = TODOS.findIndex((todo: Todo) => {
    return todo.id === todoId;
  });
  if (todoIndex) throw new Error("Could not find todo!");
  const newTodo = new Todo(todoId, text, description);
  TODOS[todoIndex] = newTodo;
  res.json({ status: 200, message: "Update to do success." });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as {
    id: string;
  };
  const newTodo = TODOS.filter((todo: Todo) => {
    return todo.id !== id;
  });
  res.json({ status: 200, data: newTodo });
};
