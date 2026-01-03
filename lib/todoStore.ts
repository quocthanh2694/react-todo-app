import { Todo } from "@/types/todo";

const KEY = "todos";

let clientSnapshot: Todo[] = [];

const serverSnapshot: Todo[] = [];

let listeners: (() => void)[] = [];
const emit = () => listeners.forEach((l) => l());

export const todoStore = {
  getSnapshot(): Todo[] {
    if (typeof window === "undefined") return serverSnapshot;

    try {
      const raw = localStorage.getItem(KEY) || "[]";
      const parsed = JSON.parse(raw);

      const cached = JSON.stringify(clientSnapshot);
      if (cached === raw) return clientSnapshot;

      clientSnapshot = parsed;
      return clientSnapshot;
    } catch {
      return clientSnapshot;
    }
  },

  getServerSnapshot(): Todo[] {
    return serverSnapshot;
  },

  subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  set(todos: Todo[]) {
    const raw = JSON.stringify(todos);
    localStorage.setItem(KEY, raw);
    clientSnapshot = todos;
    emit();
  },
};
