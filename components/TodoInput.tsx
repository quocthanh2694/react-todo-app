import { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
    const [value, setValue] = useState("");

    const submit = () => {
        if (!value.trim()) return;
        onAdd(value.trim());
        setValue("");
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Add a task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
            />
            <button
                className="bg-black text-white px-4 rounded cursor-pointer"
                onClick={submit}
            >
                Add
            </button>
        </div>
    );
}