import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "secondary-dark" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  "aria-haspopup"?: React.AriaAttributes["aria-haspopup"];
  "aria-expanded"?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  children,
  "aria-label": ariaLabel,
  "aria-haspopup": ariaHasPopup,
  "aria-expanded": ariaExpanded,
}: ButtonProps) {
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-1.5 font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      : "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-brand text-white hover:bg-brand-600",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
    "secondary-dark":
      "bg-transparent text-white border border-white/40 hover:bg-white/10",
    ghost: "text-brand hover:gap-3",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
}
