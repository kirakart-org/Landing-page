import {
  MapPin,
  MessageSquareOff,
  Boxes,
  LayoutGrid,
  Rss,
  Heart,
  BarChart3,
  ShieldCheck,
  Compass,
  Users,
  ShoppingBag,
} from "lucide-react";
import type {
  Feature,
  Step,
  Pain,
  ComparisonRow,
  Stat,
  Order,
} from "./types";

export const pains: Pain[] = [
  {
    icon: MapPin,
    title: "Invisible to your own neighborhood",
    description:
      "Great local shops get discovered by luck — a friend's recommendation, a passerby glance. There's no structured way for people 500m away to even know a shop exists.",
  },
  {
    icon: MessageSquareOff,
    title: "Your shop deserves a real storefront",
    description:
      "Shop owners rely on manual messages because there’s no catalog, no order tracking, no discovery radius — just DMs and screenshots pretending to be a storefront.",
  },
  {
    icon: Boxes,
    title: "Big marketplaces strip the place away",
    description:
      "Generic commerce listings erase what makes a local shop feel local — no personality, no story, no relationship with the buyer, just SKUs competing on price.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Explore the Corner",
    description:
      "Open your Corner and see nearby shop posts ranked by distance, not ads. Filter by category — food, fashion, grocery, services.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Become a Regular",
    description:
      "Become a regular at shops you care about, like posts, and get notified when something new opens up nearby.",
    icon: Users,
  },
  {
    number: "03",
    title: "Buy Directly",
    description:
      "Tap a post to see price, stock, and order — no redirect, no separate app, no DM back-and-forth.",
    icon: ShoppingBag,
  },
];

export const features: Feature[] = [
  {
    icon: LayoutGrid,
    title: "Storefront Corners",
    description:
      "A dedicated Corner for every shop — bio, catalog, and story-style updates.",
  },
  {
    icon: Rss,
    title: "Proximity Corner",
    description:
      "Posts ranked by distance and relevance, not paid placement.",
  },
  {
    icon: Heart,
    title: "Regulars, Likes, Alerts",
    description:
      "Full local loop — become a regular, like posts, and get alerted when a shop opens up.",
  },
  {
    icon: BarChart3,
    title: "Owner Dashboard",
    description:
      "Orders, follower growth, and post performance in one screen.",
  },
  {
    icon: MapPin,
    title: "Radius Discovery",
    description:
      "See what's sellable within 500m, 2km, or a custom radius.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Local Shops",
    description:
      "Every shop channel is verified against a real storefront, no fake sellers.",
  },
];

export const comparison: ComparisonRow[] = [
  {
    label: "Built for local discovery",
    kirakart: "yes",
    social: "no",
    marketplace: "no",
  },
  {
    label: "Native checkout & order tracking",
    kirakart: "yes",
    social: "DM-based",
    marketplace: "yes",
  },
  {
    label: "Shop retains identity & story",
    kirakart: "yes",
    social: "yes",
    marketplace: "no",
  },
  {
    label: "Regular / community growth",
    kirakart: "yes",
    social: "yes, no commerce",
    marketplace: "no",
  },
  {
    label: "Commission-free launch pricing",
    kirakart: "yes",
    social: "—",
    marketplace: "no",
  },
];

export const stats: Stat[] = [
  { value: "500+", label: "Shops onboarded" },
  { value: "12", label: "Neighborhoods" },
  { value: "40k+", label: "Corner interactions" },
  { value: "0%", label: "Commission at launch" },
];

export const trustChips = [
  "500+ shops onboarded",
  "12 neighborhoods",
  "Zero commission launch offer",
];

export const orders: Order[] = [
  { id: "#4821", customer: "Priya S.", item: "Alphonso mangoes · 1kg", status: "New", amount: "₹480" },
  { id: "#4820", customer: "Arjun M.", item: "Sourdough loaf ×2", status: "New", amount: "₹360" },
  { id: "#4819", customer: "Kavya R.", item: "Handloom cotton stole", status: "Packed", amount: "₹1,240" },
  { id: "#4818", customer: "Rohit V.", item: "Fresh filter coffee · 500g", status: "Packed", amount: "₹620" },
  { id: "#4817", customer: "Anita J.", item: "Ghee jar · 500ml", status: "Delivered", amount: "₹740" },
];
