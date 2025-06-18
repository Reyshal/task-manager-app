"use client";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskNavigation from "@/components/TaskNavigation";
import { TaskStatus } from "@/types";
import { useState } from "react";

export default function HomePage() {
  const [filter, setFilter] = useState<TaskStatus>("all");

  const handleFilter = (filter: TaskStatus) => {
    setFilter(filter);
  };

  return (
    <>
      <h1 className="text-xl font-semibold">Tasks List</h1>

      <TaskForm />
      <TaskNavigation active={filter} handleClick={handleFilter} />
      <TaskList filter={filter} />
    </>
  );
}
