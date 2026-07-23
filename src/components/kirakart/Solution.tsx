import { Section } from "./Section";
import { AnimatedGroup } from "./AnimatedGroup";
import { PhoneMock } from "./PhoneMock";
import { Heart, MessageCircle, MapPin } from "lucide-react";
import shopImg from "@/assets/kirakart-shop-avatar.jpg";
import post2 from "@/assets/kirakart-post-2.jpg";

export function Solution() {
  return (
    <Section
      id="solution"
      eyebrow="The Kirakart Way"
      title={<>What if your neighborhood had a feed?</>}
      intro={
        <>
          Kirakart gives every shop a channel — a mix of an Instagram profile
          and a storefront. Shop owners post like they already do. Shoppers
          follow, like, get notified, and buy — all without leaving the feed.
          Discovery is proximity-first: what&apos;s near you surfaces first, the
          way it should.
        </>
      }
    >
      <AnimatedGroup className="grid items-center gap-10 lg:grid-cols-2">
        {/* Shop channel card */}
        <div className="rounded-3xl border border-hairline bg-surface p-5 shadow-card sm:p-6">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative h-32 bg-gradient-to-br from-brand/60 via-brand/40 to-social/50 sm:h-40" />
            <div className="relative -mt-10 flex items-end gap-4 px-5">
              <img
                src={shopImg}
                alt="Anjali Weaves"
                width={80}
                height={80}
                className="h-20 w-20 rounded-2xl border-4 border-surface object-cover"
              />
              <div className="pb-3">
                <div className="font-display text-lg leading-tight text-foreground">
                  Anjali Weaves
                </div>
                <div className="text-xs text-muted-foreground">
                  <MapPin className="mr-1 inline h-3 w-3 text-brand" />
                  Indiranagar · 1.4 km away
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between px-5">
              <div className="flex gap-5 text-sm">
                <div>
                  <div className="font-semibold text-foreground">248</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">4.2k</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">4.9★</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
              <button className="rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground">
                Follow
              </button>
            </div>
            <p className="mt-4 px-5 text-sm text-muted-foreground">
              Handloom cotton, block-printed stoles, everyday sarees. Made in
              our workshop above the shop.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-1 px-5 pb-5">
              <img src={post2} alt="" className="aspect-square rounded-lg object-cover" />
              <img src={shopImg} alt="" className="aspect-square rounded-lg object-cover" />
              <div className="grid aspect-square place-items-center rounded-lg bg-gradient-to-br from-brand/20 to-social/20 text-xs font-semibold text-foreground">
                +246
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
            A shop channel
          </div>
        </div>

        {/* Purchasable feed post */}
        <div className="flex flex-col items-center">
          <PhoneMock
            image={post2}
            shopName="Levain Bakery"
            handle="@levain.blr"
            distance="0.6 km away"
            caption="Sourdough fresh out of the oven — grab one before 8pm 🥖"
            price="₹180"
            likes="842"
            comments="61"
          />
          <div className="mt-4 flex items-center gap-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <Heart className="h-3.5 w-3.5 text-brand" />
            A purchasable feed post
            <MessageCircle className="h-3.5 w-3.5 text-social" />
          </div>
        </div>
      </AnimatedGroup>
    </Section>
  );
}
