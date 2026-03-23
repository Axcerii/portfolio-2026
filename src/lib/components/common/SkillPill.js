import React from "react";

export default function SkillPill({ children, icon }) {
    return (
        <span
            className="
        inline-flex items-center gap-2 border border-secondary/40 text-secondary
        text-xs uppercase tracking-widest font-semibold
        px-3 py-1 rounded-full
        transition-all duration-300
        hover:bg-secondary hover:text-foreground hover:border-secondary
        cursor-default
      "
        >
            {icon && <span className="flex items-center justify-center w-4 h-4">{icon}</span>}
            {children}
        </span>
    );
}
