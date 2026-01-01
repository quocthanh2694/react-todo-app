interface Props {
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({ id, title, completed, onToggle, onDelete }: Props) {
    return (
        <div className="flex items-center justify-between border p-3 rounded mb-2">
            <div
                className={`flex-1 cursor-pointer ${completed ? "line-through text-gray-400" : ""}`}
                onClick={() => onToggle(id)}
            >
                {title}
            </div>
            <button
                className="text-red-500 text-sm"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
}