import { Heart, MessageCircle, Send, MapPin, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneMock({
  image,
  shopName = "Lakshmi Stores",
  handle = "@lakshmi.local",
  distance = "2.3 km away",
  caption = "Fresh Alphonso mangoes in today · limited crates 🥭",
  price = "₹480",
  likes = "1,284",
  comments = "132",
  className,
}: {
  image: string;
  shopName?: string;
  handle?: string;
  distance?: string;
  caption?: string;
  price?: string;
  likes?: string;
  comments?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[320px] rounded-[2.5rem] border border-black/10 bg-black p-2 shadow-lift",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-surface">
        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            Feed
          </span>
        </div>

        {/* post header */}
        <div className="flex items-center gap-3 px-4 pt-2 pb-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-social text-xs font-bold text-white">
            LS
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-foreground">
              {shopName}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <MapPin className="h-3 w-3 text-brand" />
              <span className="truncate">{distance}</span>
              <span>·</span>
              <span className="truncate">{handle}</span>
            </div>
          </div>
          <button className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-brand-foreground">
            Follow
          </button>
        </div>

        {/* image */}
        <div className="relative">
          <img
            src={image}
            alt={caption}
            className="aspect-square w-full object-cover"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
            <MapPin className="h-3 w-3" />
            {distance}
          </div>
          <div className="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-foreground shadow">
            {price}
          </div>
        </div>

        {/* actions */}
        <div className="flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-4 text-foreground">
            <Heart className="h-5 w-5 fill-brand text-brand" />
            <MessageCircle className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
          <Bookmark className="h-5 w-5 text-foreground" />
        </div>

        <div className="px-4 pt-2 pb-3 text-[12px] text-foreground">
          <div className="font-semibold">{likes} likes · {comments} comments</div>
          <p className="mt-1 leading-snug text-muted-foreground">
            <span className="font-semibold text-foreground">{shopName}</span>{" "}
            {caption}
          </p>
        </div>

        {/* buy bar */}
        <div className="mx-3 mb-3 flex items-center justify-between gap-2 rounded-2xl border border-hairline bg-surface-elevated p-2">
          <div className="pl-2 text-[11px]">
            <div className="font-semibold text-foreground">In stock · 12 crates</div>
            <div className="text-muted-foreground">Delivery in 45 min</div>
          </div>
          <button className="rounded-xl bg-foreground px-4 py-2 text-xs font-semibold text-background">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
