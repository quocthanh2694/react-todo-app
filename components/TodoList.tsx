import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
    if (!todos.length) {
        return <p className="text-center text-gray-400">No tasks yet</p>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
            ))}
        </div>
    );
}