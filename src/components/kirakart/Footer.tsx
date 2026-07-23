import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["How it works", "For Shoppers", "For Shop Owners", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-elevated">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Your neighborhood Corner, with real shops and real regulars.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs font-semibold tracking-wide text-foreground uppercase">
              {c.title}
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <div>© 2026 Kirakart. Made for neighborhoods, not algorithms.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Community</a>
            <a href="#" className="hover:text-foreground">Updates</a>
            <a href="#" className="hover:text-foreground">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
