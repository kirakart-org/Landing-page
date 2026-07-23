import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl leading-none tracking-tight text-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-brand-foreground shadow-brand"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M12 3l1.6 5 5.4.4-4.3 3.4 1.5 5.2L12 14.6 7.8 17l1.5-5.2L5 8.4l5.4-.4L12 3z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>
        kira<span className="text-brand">kart</span>
      </span>
    </a>
  );
}
