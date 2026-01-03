import { useSyncExternalStore } from "react";
import { todoStore } from "@/lib/todoStore";

export function useTodos() {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot,
    todoStore.getServerSnapshot
  );
  const addTodo = (title: string) =>
    todoStore.set([
      { id: crypto.randomUUID(), title, completed: false },
      ...todos,
    ]);

  const toggleTodo = (id: string) =>
    todoStore.set(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTodo = (id: string) =>
    todoStore.set(todos.filter((t) => t.id !== id));

  return { todos, addTodo, toggleTodo, deleteTodo };
}
