import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="mb-6 text-center relative">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <p className="text-gray-500 text-sm">Organize your day efficiently</p>
      <div className="absolute right-0 top-0">
        <ThemeToggle />
      </div>
    </header>
  );
}
