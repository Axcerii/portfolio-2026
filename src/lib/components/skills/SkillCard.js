/* ────────────────────────────────────────────────────────────
   SkillCard
   On column hover (group/col), every card shifts to primary.
   ──────────────────────────────────────────────────────────── */
export default function SkillCard({ name, icon }) {
    return (
        <article
            aria-label={name}
            title={name}
            className="
                group/card relative flex flex-col items-center justify-center gap-2
                px-3 py-5 rounded-xl cursor-default flex-shrink-0
                bg-transparent
                border border-background/20
                transition-all duration-300 ease-out

                group-hover/col:border-primary/60
                group-hover/col:bg-primary/5

                hover:!border-primary hover:!bg-primary/15 hover:-translate-y-1
                hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_30%,transparent),0_8px_28px_-6px_color-mix(in_srgb,var(--primary)_35%,transparent)]
            "
        >
            {/* Notch */}
            <span className="
                absolute top-0 left-1/2 -translate-x-1/2
                h-1 w-5 rounded-b-md bg-background/30
                transition-all duration-300
                group-hover/col:bg-primary/60
                group-hover/card:!w-9 group-hover/card:!bg-primary
            " />

            <span className="
                text-3xl leading-none text-background/70
                transition-all duration-300
                group-hover/col:text-primary/80
                group-hover/card:!text-primary group-hover/card:scale-110
            " aria-hidden="true">
                {icon}
            </span>

            <span className="
                text-[0.6rem] font-semibold uppercase tracking-widest text-center leading-tight
                text-background/50
                transition-all duration-300
                group-hover/col:text-primary/70
                group-hover/card:!text-primary
            ">
                {name}
            </span>
        </article>
    );
}