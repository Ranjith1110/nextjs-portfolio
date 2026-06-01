import Link from "next/link";

export default function Button({
    children,
    href,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const baseStyles = "group relative inline-flex items-center justify-center font-bold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden";

    const variants = {
        primary: "bg-[#8a1c1c] text-white focus:ring-[#8a1c1c] shadow-md",
        secondary: "bg-[#d4a84a] text-white focus:ring-[#d4a84a] shadow-md",
        outline: "border-2 border-[#8a1c1c] text-[#8a1c1c] hover:text-white focus:ring-[#8a1c1c]",
        ghost: "text-[#8a1c1c] hover:bg-red-50 focus:ring-[#8a1c1c]",
    };

    const sizes = {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const InnerContent = () => (
        <>
            {variant !== "ghost" && variant !== "outline" && (
                <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[150%] skew-x-[-25deg] transition-transform duration-700 ease-in-out z-0"></span>
            )}

            {variant === "outline" && (
                <span className="absolute inset-0 w-full h-full bg-[#8a1c1c] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
            )}

            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                <InnerContent />
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            <InnerContent />
        </button>
    );
}