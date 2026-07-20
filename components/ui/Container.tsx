interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full px-4 md:px-[75px] ${className}`}>
      {children}
    </div>
  );
}
