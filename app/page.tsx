"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([{
    id: "1",
    title: "Todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    completed: true,
  }
  ]);


  const addTodo = () => { }
  const toggleTodo = () => { }
  const deleteTodo = () => { }

  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <Header />
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <Footer />
    </main>
  );
}
