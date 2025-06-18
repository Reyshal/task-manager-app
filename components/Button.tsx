interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
