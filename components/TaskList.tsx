import { Task, TaskStatus } from "@/types";
import TaskItem from "./TaskItem";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";

interface TaskListProps {
  filter: TaskStatus;
}

export default function TaskList({ filter }: TaskListProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tasks", filter],
    queryFn: async () => {
      // Straight to the API because there is no need to set cookie from the backend
      // Get tasks data
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tasks?filter=${filter}`,
        {
          withCredentials: true,
        },
      );

      if (response.status !== 200) {
        if (response.status === 401) {
          // This will clear the token from the cookie and it always success
          await axios.post("/auth/logout");

          // Redirect to the login page
          window.location.href = "/login";
        }

        // For other error that not 401
        throw new Error(response.data.error);
      }

      return response.data;
    },
  });

  if (error) {
    return <div>Something went wrong. Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-[58px] bg-white gap-2 border animate-pulse flex justify-between items-center py-4 px-5">
        <div className="h-2 rounded bg-gray-200 w-full"></div>
        <div className="h-2 rounded bg-gray-200 w-[60px]"></div>
        <div className="h-2 rounded bg-gray-200 w-[60px]"></div>
      </div>
    );
  }

  const renderedTasks =
    data && data.length > 0 ? (
      data.map((task: Task) => <TaskItem key={task.id} task={task} />)
    ) : (
      <div className="flex justify-center items-center h-[58px]">
        <p>No tasks found</p>
      </div>
    );

  return <div className="space-y-2">{renderedTasks}</div>;
}
