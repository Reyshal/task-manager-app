import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";

const deleteTask = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${id}`,
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

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
