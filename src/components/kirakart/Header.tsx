import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const nav = [
  { label: "How it works", href: "#how" },
  { label: "For Shoppers", href: "#audience" },
  { label: "For Shop Owners", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <div
        className={cn(
          "pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-3 transition-all duration-300",
          scrolled
            ? "rounded-full border border-hairline bg-background/70 px-4 py-2 shadow-card backdrop-blur-xl sm:px-5"
            : "rounded-2xl px-5 py-3 sm:px-6",
        )}
      >
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#login"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Log in
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
        </div>
        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-x-3 top-20 rounded-3xl border border-hairline bg-background/95 p-4 shadow-lift backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 pt-2">
              <a
                href="#login"
                className="flex-1 rounded-full border border-hairline px-4 py-2.5 text-center text-sm font-medium"
              >
                Log in
              </a>
              <a
                href="#waitlist"
                className="flex-1 rounded-full bg-brand px-4 py-2.5 text-center text-sm font-semibold text-brand-foreground"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
