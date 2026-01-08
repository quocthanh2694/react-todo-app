type Theme = "light" | "dark";

const KEY = "theme";

let clientSnapshot: Theme = "light";
const serverSnapshot: Theme = "light";
let listeners: (() => void)[] = [];
const emit = () => listeners.forEach((l) => l());

export const themeStore = {
  getSnapshot(): Theme {
    if (typeof window === "undefined") return serverSnapshot;

    const raw = localStorage.getItem(KEY) || "light";
    if (raw === clientSnapshot) return clientSnapshot;

    clientSnapshot = raw as Theme;
    return clientSnapshot;
  },

  getServerSnapshot(): Theme {
    return serverSnapshot;
  },

  subscribe(cb: () => void) {
    listeners.push(cb);
    return () => (listeners = listeners.filter((x) => x !== cb));
  },

  set(theme: Theme) {
    localStorage.setItem(KEY, theme);
    clientSnapshot = theme;
    emit();
  },
};
