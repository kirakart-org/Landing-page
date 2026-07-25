"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Store, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Purpose = "shopper" | "shop_owner";

const purposeOptions: Array<{
  value: Purpose;
  label: string;
  description: string;
  Icon: typeof ShoppingBag;
}> = [
  {
    value: "shopper",
    label: "I'm a Shopper",
    description: "Find the best shops in your Corner.",
    Icon: ShoppingBag,
  },
  {
    value: "shop_owner",
    label: "I'm a Shop Owner",
    description: "List your storefront and reach your regulars.",
    Icon: Store,
  },
];

export function WaitlistModal({
  initialPurpose,
  children,
}: {
  initialPurpose?: Purpose;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [purpose, setPurpose] = useState<Purpose | undefined>(initialPurpose);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | undefined>();
  const [position, setPosition] = useState<string | undefined>();

  useEffect(() => {
    if (open) {
      setPurpose(initialPurpose);
      setMobile("");
      setName("");
      setEmail("");
      setStatus("idle");
      setError(undefined);
      setPosition(undefined);
    }
  }, [open, initialPurpose]);

  const normalizedMobile = mobile.replace(/\D/g, "");
  const mobileValid = /^\d{10}$/.test(normalizedMobile);
  const canSubmit = Boolean(purpose && mobileValid);

  const handleMobileChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setMobile(digits);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    setStatus("loading");
    setError(undefined);

    try {
      const response = await fetch("https://landingpage-backend-xlht.onrender.com/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: normalizedMobile,
          purpose,
          name: name.trim() || null,
          email: email.trim() || null,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong — try again.");
      }

      const data = await response.json().catch(() => ({}));
      const returnedPosition = data?.position ?? data?.waitlistPosition ?? data?.rank;
      setPosition(returnedPosition ? String(returnedPosition) : undefined);
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong — try again",
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[420px] rounded-[2rem] p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Get access when your neighborhood Corner goes live. It takes a moment to join.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="space-y-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
              <Check className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">You're on the list</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We'll text you the moment your neighborhood goes live.
              </p>
              {position ? (
                <p className="text-sm font-semibold text-foreground/90">
                  You're #{position}
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground">Purpose</label>
                  <p className="text-xs text-muted-foreground">
                    Choose the option that best describes you.
                  </p>
                </div>
                <span className="text-xs font-medium text-destructive">Required</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {purposeOptions.map((option) => {
                  const Icon = option.Icon;
                  const selected = purpose === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPurpose(option.value)}
                      className={cn(
                        "group rounded-3xl border p-4 text-left transition-shadow focus:outline-none focus:ring-2 focus:ring-brand",
                        selected
                          ? "border-brand bg-brand/10 shadow-sm"
                          : "border-hairline bg-surface hover:border-foreground/30 hover:bg-muted/50",
                      )}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "grid h-10 w-10 place-items-center rounded-2xl",
                              selected ? "bg-brand text-brand-foreground" : "bg-muted/10 text-muted-foreground",
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              {option.label}
                            </div>
                            <div className="text-xs leading-5 text-muted-foreground">
                              {option.description}
                            </div>
                          </div>
                        </div>
                        {selected ? (
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground">
                            <Check className="h-4 w-4" />
                          </span>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="waitlist-mobile" className="text-sm font-semibold text-foreground">
                Mobile number
              </label>
              <input
                id="waitlist-mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={mobile}
                onChange={(event) => handleMobileChange(event.target.value)}
                className="w-full rounded-3xl border border-hairline bg-background px-4 py-4 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="10-digit mobile number"
                aria-invalid={!mobileValid && mobile.length > 0}
              />
              {!mobileValid && mobile.length > 0 ? (
                <p className="text-sm text-destructive">Enter a valid 10-digit mobile number.</p>
              ) : null}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-semibold text-foreground">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold text-foreground">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email (optional)"
                  className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
            </div>

            {error ? (
              <div className="rounded-3xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!canSubmit || status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-3xl bg-brand px-4 py-4 text-sm font-semibold text-brand-foreground shadow-brand transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Joining the waitlist..." : "Join the Waitlist"}
            </button>
          </form>
        )}

      </DialogContent>
    </Dialog>
  );
}
