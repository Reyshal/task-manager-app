import { TaskStatus } from "@/types";

type TaskNavigationProps = {
  active: TaskStatus;
  handleClick: (filter: TaskStatus) => void;
};

export default function TaskNavigation({
  active,
  handleClick,
}: TaskNavigationProps) {
  return (
    <div className="flex gap-4 text-gray-500">
      {["all", "active", "completed"].map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type as "all" | "active" | "completed")}
          className={`pb-1 capitalize ${
            active === type
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-600 hover:border-b-2 border-blue-600"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
