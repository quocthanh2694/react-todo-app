"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useTodos } from "@/hooks/useTodo";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <Header />
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <Footer />
    </main>
  );
}
