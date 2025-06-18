import { useState } from "react";
import { Button } from "./Button";
import useCreateTask from "@/hooks/UseCreateTask";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const { mutate } = useCreateTask();

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the form from submitting
    e.preventDefault();

    if (!task) return;

    mutate(task);
    setTask("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-3">
      <input
        type="text"
        placeholder="Add new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border rounded-md px-2 py-1 text-sm"
      />
      <Button>Add</Button>
    </form>
  );
}
