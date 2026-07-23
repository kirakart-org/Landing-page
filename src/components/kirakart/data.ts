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
    title: "Instagram wasn't built to sell",
    description:
      "Shop owners post on Instagram/WhatsApp because it's free, but there's no catalog, no order tracking, no discovery radius — just DMs and screenshots doing the job of a storefront.",
  },
  {
    icon: Boxes,
    title: "Marketplaces flatten identity",
    description:
      "Amazon and Flipkart-style listings strip away everything that makes a local shop feel local — no personality, no story, no relationship with the buyer, just SKUs competing on price.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Open the feed and see shop posts ranked by distance, not ads. Filter by category — food, fashion, grocery, services.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Follow & Engage",
    description:
      "Follow shops you like, like and comment on posts, get notified when something new drops nearby.",
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
    title: "Shop Channels",
    description:
      "An Instagram-style profile for every shop — bio, catalog, story-style updates.",
  },
  {
    icon: Rss,
    title: "Proximity Feed",
    description:
      "Posts ranked by distance and relevance, not paid placement.",
  },
  {
    icon: Heart,
    title: "Follow, Like, Notify",
    description:
      "Full social loop — follow shops, like posts, get pinged on new drops.",
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
    label: "Follower / community growth",
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
  { value: "40k+", label: "Feed interactions" },
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
