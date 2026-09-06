"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Store, Check, ArrowRight, ArrowLeft } from "lucide-react";
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

const categoryOptions: Record<string, string[]> = {
  "Food & Dining": ["Biryani", "South Indian", "North Indian", "Fast Food", "Chinese", "Bakery & Desserts", "Cafe"],
  "Grocery & Supermarket": ["Vegetables & Fruits", "Staples & Grains", "Organic & Gourmet", "General Provision"],
  "Clothing & Fashion": ["Menswear", "Womenswear", "Kidswear", "Footwear & Accessories", "Boutique"],
  "Electronics & Mobiles": ["Mobile Phones & Accessories", "Computers & Laptops", "Home Appliances", "Repair & Service"],
  "Pharmacy & Healthcare": ["Medicines", "Wellness & Supplements", "Personal Care", "Ayurvedic & Herbal"],
  "Beauty & Salon": ["Cosmetics & Skincare", "Salon Services", "Haircare", "Fragrances"],
  "Home & Hardware": ["Hardware & Tools", "Home Decor", "Electrical & Plumbing", "Kitchenware"],
  "Other": ["Crafts & Gifts", "Stationery & Books", "Pet Supplies", "Sports & Fitness"],
};

const businessTypeOptions = [
  "Restaurant",
  "Retail Store",
  "Supermarket / Provision",
  "Bakery / Sweets",
  "Wholesale",
  "Service Provider",
  "Home Business",
  "Other",
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
  const [merchantStep, setMerchantStep] = useState<1 | 2>(1);

  // Customer fields
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Merchant specific fields
  const [ownerName, setOwnerName] = useState("");
  const [shopName, setShopName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [customSubcategory, setCustomSubcategory] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("Chennai");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | undefined>();
  const [position, setPosition] = useState<string | undefined>();

  useEffect(() => {
    if (open) {
      setPurpose(initialPurpose);
      setMerchantStep(1);
      setMobile("");
      setName("");
      setEmail("");
      setOwnerName("");
      setShopName("");
      setCategory("");
      setSubcategory("");
      setCustomSubcategory("");
      setBusinessType("");
      setAddress("");
      setLocality("");
      setCity("Chennai");
      setLatitude("");
      setLongitude("");
      setStatus("idle");
      setError(undefined);
      setPosition(undefined);
    }
  }, [open, initialPurpose]);

  const normalizedMobile = mobile.replace(/\D/g, "");
  const mobileValid = /^\d{10}$/.test(normalizedMobile);

  // Validation logic
  const isShopperValid = Boolean(purpose === "shopper" && mobileValid);

  const isMerchantStep1Valid = Boolean(ownerName.trim() && mobileValid);
  const isMerchantStep2Valid = Boolean(
    shopName.trim() && category && address.trim() && city.trim(),
  );
  const isMerchantValid = Boolean(
    purpose === "shop_owner" && isMerchantStep1Valid && isMerchantStep2Valid,
  );

  const canSubmit = purpose === "shopper" ? isShopperValid : isMerchantValid;

  const handleMobileChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setMobile(digits);
  };

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setSubcategory("");
    setCustomSubcategory("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    setStatus("loading");
    setError(undefined);

    const finalSubcategory = subcategory === "other" ? customSubcategory.trim() : subcategory;

    const payload =
      purpose === "shopper"
        ? {
            purpose: "shopper",
            mobile: normalizedMobile,
            name: name.trim() || null,
            email: email.trim() || null,
          }
        : {
            purpose: "shop_owner",
            owner_name: ownerName.trim(),
            mobile: normalizedMobile,
            email: email.trim() || null,
            shop_name: shopName.trim(),
            category,
            subcategory: finalSubcategory || null,
            business_type: businessType || null,
            address: address.trim(),
            locality: locality.trim() || null,
            city: city.trim(),
            latitude: latitude ? parseFloat(latitude) : null,
            longitude: longitude ? parseFloat(longitude) : null,
          };

    const apiUrl = import.meta.env.VITE_API_URL || "https://landingpage-backend-xlht.onrender.com/early-access";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.detail || body?.message || "Something went wrong — try again.");
      }

      const data = await response.json().catch(() => ({}));
      const returnedPosition = data?.position ?? data?.waitlistPosition ?? data?.rank ?? data?.id;
      setPosition(returnedPosition ? String(returnedPosition) : undefined);
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong — try again";
      setError(errorMsg);

      // If merchant submission failed due to duplicate mobile/email or step 1 error, return to step 1 automatically
      if (purpose === "shop_owner") {
        setMerchantStep(1);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[480px] overflow-y-auto rounded-[2rem] p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Get access when your neighborhood Corner goes live. It takes a moment to join.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="space-y-6 text-center py-4">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
              <Check className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">You're on the list</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We'll contact you the moment your neighborhood goes live.
              </p>
            </div>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Global Error Banner */}
            {error ? (
              <div className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive flex items-center justify-between gap-2">
                <span>{error}</span>
                <button
                  type="button"
                  onClick={() => setError(undefined)}
                  className="text-xs underline hover:opacity-80"
                >
                  Dismiss
                </button>
              </div>
            ) : null}
            {/* Purpose Selector */}
            <div className="space-y-2">
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
                      onClick={() => {
                        setPurpose(option.value);
                        setMerchantStep(1);
                      }}
                      className={cn(
                        "group rounded-3xl border p-3.5 text-left transition-shadow focus:outline-none focus:ring-2 focus:ring-brand",
                        selected
                          ? "border-brand bg-brand/10 shadow-sm"
                          : "border-hairline bg-surface hover:border-foreground/30 hover:bg-muted/50",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "grid h-9 w-9 place-items-center rounded-2xl shrink-0",
                              selected ? "bg-brand text-brand-foreground" : "bg-muted/10 text-muted-foreground",
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              {option.label}
                            </div>
                            <div className="text-[11px] leading-4 text-muted-foreground">
                              {option.description}
                            </div>
                          </div>
                        </div>
                        {selected ? (
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shopper Form */}
            {purpose === "shopper" && (
              <div className="space-y-4 pt-1">
                <div className="space-y-2">
                  <label htmlFor="waitlist-mobile" className="text-sm font-semibold text-foreground">
                    Mobile number <span className="text-xs font-normal text-destructive">*</span>
                  </label>
                  <input
                    id="waitlist-mobile"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={mobile}
                    onChange={(event) => handleMobileChange(event.target.value)}
                    className="w-full rounded-3xl border border-hairline bg-background px-4 py-3.5 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="10-digit mobile number"
                    aria-invalid={!mobileValid && mobile.length > 0}
                  />
                  {!mobileValid && mobile.length > 0 ? (
                    <p className="text-xs text-destructive">Enter a valid 10-digit mobile number.</p>
                  ) : null}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block space-y-1.5">
                    <span className="text-sm font-semibold text-foreground">Name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name (optional)"
                      className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </label>
                  <label className="block space-y-1.5">
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
              </div>
            )}

            {/* Merchant Multi-step Form */}
            {purpose === "shop_owner" && (
              <div className="space-y-4 pt-1">
                {/* Stepper Header */}
                <div className="flex items-center justify-between border-b border-hairline pb-2">
                  <span className="text-xs font-semibold text-brand tracking-wide uppercase">
                    Step {merchantStep} of 2: {merchantStep === 1 ? "Owner Details" : "Shop Details"}
                  </span>
                  <div className="flex gap-1.5">
                    <span
                      className={cn(
                        "h-1.5 w-6 rounded-full transition-colors",
                        merchantStep >= 1 ? "bg-brand" : "bg-muted",
                      )}
                    />
                    <span
                      className={cn(
                        "h-1.5 w-6 rounded-full transition-colors",
                        merchantStep === 2 ? "bg-brand" : "bg-muted",
                      )}
                    />
                  </div>
                </div>

                {merchantStep === 1 ? (
                  /* Step 1: Owner Info */
                  <div className="space-y-4">
                    <label className="block space-y-1.5">
                      <span className="text-sm font-semibold text-foreground">
                        Owner Name <span className="text-xs font-normal text-destructive">*</span>
                      </span>
                      <input
                        type="text"
                        value={ownerName}
                        onChange={(event) => setOwnerName(event.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-3xl border border-hairline bg-background px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    </label>

                    <div className="space-y-1.5">
                      <label htmlFor="merchant-mobile" className="text-sm font-semibold text-foreground">
                        Mobile number <span className="text-xs font-normal text-destructive">*</span>
                      </label>
                      <input
                        id="merchant-mobile"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={mobile}
                        onChange={(event) => handleMobileChange(event.target.value)}
                        className="w-full rounded-3xl border border-hairline bg-background px-4 py-3.5 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        placeholder="10-digit mobile number"
                        aria-invalid={!mobileValid && mobile.length > 0}
                      />
                      {!mobileValid && mobile.length > 0 ? (
                        <p className="text-xs text-destructive">Enter a valid 10-digit mobile number.</p>
                      ) : null}
                    </div>

                    <label className="block space-y-1.5">
                      <span className="text-sm font-semibold text-foreground">Email</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email (optional)"
                        className="w-full rounded-3xl border border-hairline bg-background px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    </label>

                    <button
                      type="button"
                      disabled={!isMerchantStep1Valid}
                      onClick={() => setMerchantStep(2)}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-brand px-4 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Next: Shop Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  /* Step 2: Shop Details */
                  <div className="space-y-3.5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">
                          Shop Name <span className="text-xs font-normal text-destructive">*</span>
                        </span>
                        <input
                          type="text"
                          value={shopName}
                          onChange={(event) => setShopName(event.target.value)}
                          placeholder="e.g. Kumar Biryani"
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </label>

                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">Business Type</span>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        >
                          <option value="">Select Type</option>
                          {businessTypeOptions.map((bt) => (
                            <option key={bt} value={bt}>
                              {bt}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">
                          Category <span className="text-xs font-normal text-destructive">*</span>
                        </span>
                        <select
                          value={category}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        >
                          <option value="">Select Category</option>
                          {Object.keys(categoryOptions).map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">Subcategory</span>
                        <select
                          value={subcategory}
                          disabled={!category}
                          onChange={(e) => setSubcategory(e.target.value)}
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-50"
                        >
                          <option value="">Select Subcategory</option>
                          {category &&
                            categoryOptions[category]?.map((sub) => (
                              <option key={sub} value={sub}>
                                {sub}
                              </option>
                            ))}
                          <option value="other">Other...</option>
                        </select>
                      </label>
                    </div>

                    {subcategory === "other" && (
                      <input
                        type="text"
                        value={customSubcategory}
                        onChange={(e) => setCustomSubcategory(e.target.value)}
                        placeholder="Specify subcategory"
                        className="w-full rounded-3xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    )}

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">
                          City <span className="text-xs font-normal text-destructive">*</span>
                        </span>
                        <input
                          type="text"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          placeholder="e.g. Chennai"
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </label>

                      <label className="block space-y-1">
                        <span className="text-sm font-semibold text-foreground">Locality / Area</span>
                        <input
                          type="text"
                          value={locality}
                          onChange={(event) => setLocality(event.target.value)}
                          placeholder="e.g. Triplicane"
                          className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                        />
                      </label>
                    </div>

                    <label className="block space-y-1">
                      <span className="text-sm font-semibold text-foreground">
                        Address <span className="text-xs font-normal text-destructive">*</span>
                      </span>
                      <input
                        type="text"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="e.g. 123 Main Road"
                        className="w-full rounded-3xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                      />
                    </label>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setMerchantStep(1)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-3xl border border-hairline bg-surface px-4 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!canSubmit || status === "loading"}
                        className="inline-flex flex-1 items-center justify-center rounded-3xl bg-brand px-4 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "loading" ? "Joining waitlist..." : "Join the Waitlist"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {purpose === "shopper" && (
              <button
                type="submit"
                disabled={!canSubmit || status === "loading"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-3xl bg-brand px-4 py-4 text-sm font-semibold text-brand-foreground shadow-brand transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Joining the waitlist..." : "Join the Waitlist"}
              </button>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}


