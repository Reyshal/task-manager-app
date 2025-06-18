import useDeleteTask from "@/hooks/useDeleteTask";
import useUpdateTask from "@/hooks/useUpdateTask";
import { Task } from "@/types";

export default function TaskItem({ task }: { task: Task }) {
  const { mutate: updateMutate } = useUpdateTask();
  const { mutate: deleteMutate } = useDeleteTask();

  console.log(task);

  return (
    <div
      key={task.id}
      className="w-full bg-white border flex justify-between items-center py-4 px-5"
    >
      <div className="font-semibold">{task.title}</div>
      <div className="flex gap-5 text-sm font-medium">
        {task.completed ? (
          <button
            onClick={() => updateMutate(task)}
            className="text-blue-600 hover:text-blue-700"
          >
            Uncomplete
          </button>
        ) : (
          <button
            onClick={() => updateMutate(task)}
            className="text-green-600 hover:text-green-700"
          >
            Complete
          </button>
        )}

        <button
          onClick={() => deleteMutate(task.id)}
          className="text-red-600 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
