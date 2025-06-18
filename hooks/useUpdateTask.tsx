import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Task } from "@/types";

const updateTask = async (task: Task) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${task.id}`,
    {
      title: task.title,
      completed: !task.completed,
    },
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
};

export default function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
