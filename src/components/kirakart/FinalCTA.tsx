import { WaitlistModal } from "./WaitlistModal";

export function FinalCTA() {
  return (
    <section id="waitlist" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-16 text-background sm:px-16 sm:py-24">
        {/* accent blobs */}
        <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brand/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-32 h-80 w-80 rounded-full bg-social/40 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Bring Your Local Business Online.Reach More Customers. Build Loyal Regulars.
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WaitlistModal initialPurpose="shopper">
              <button className="w-full rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-white/10 sm:w-auto">
                Join the Waitlist
              </button>
            </WaitlistModal>
            <WaitlistModal initialPurpose="shop_owner">
              <button className="w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5 sm:w-auto">
                List Your Shop
              </button>
            </WaitlistModal>
          </div>
          <p className="mt-5 text-xs text-background/70">
            Join today and be among the first to experience the future of local shopping.
          </p>
        </div>
      </div>
    </section>
  );
}
