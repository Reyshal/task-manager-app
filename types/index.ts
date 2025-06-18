// Task
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskStatus = "all" | "active" | "completed";
