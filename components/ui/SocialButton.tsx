type SocialButtonProps = {
  href: string;
  icon: string; // ex: "bi-linkedin", "bi-github"
  label?: string;
  className?: string;
};

export function SocialButton({
  href,
  icon,
  label,
  className = "bg-primary text-black hover:shadow-[0_0_15px_var(--color-primary)]",
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        inline-flex
        items-center
        justify-center
        w-12
        h-12
        rounded-full
        transition
        duration-300
        hover:scale-110
        ${className}
      `}
    >
      <i className={`bi ${icon} text-xl`} />
    </a>
  );
}
