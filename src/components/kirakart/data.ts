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
    title: "People don't know nearby shops exist",
    description:
      "Thousands of great local businesses are just minutes away, but customers rarely discover them online. Most people only find them through word of mouth.",
  },
  {
    icon: MessageSquareOff,
    title: "Shop owners can't stay connected with customers",
    description:
      "Most local businesses rely on WhatsApp, phone calls, or memory. They have no easy way to notify loyal customers about new arrivals, offers, or restocks.",
  },
  {
    icon: Boxes,
    title: "Every marketplace looks the same",
    description:
      "Traditional marketplaces focus on products—not people. Local shops lose their identity, relationships, and loyal customers while competing only on price.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Discover Nearby Shops",
    description:
      "Browse trusted local stores around you and explore their latest products, offers, and updates.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Follow Your Favorite Shops",
    description:
      "Follow the stores you love to receive updates whenever they post new products or special offers.",
    icon: Users,
  },
  {
    number: "03",
    title: "Buy Directly",
    description:
      "Order directly from the shop in just a few taps. No endless searching. No middlemen.",
    icon: ShoppingBag,
  },
];

export const features: Feature[] = [
  {
    icon: LayoutGrid,
    title: "Digital Storefront",
    description:
      "Create your own shop profile with products, business information, and updates—all in one place.",
  },
  {
    icon: Rss,
    title: "Nearby Discovery",
    description:
      "Help nearby customers discover your shop based on location instead of paid advertisements.",
  },
  {
    icon: Heart,
    title: "Build Loyal Customers",
    description:
      "Customers can follow your shop, like your posts, and receive updates whenever you add something new.",
  },
  {
    icon: BarChart3,
    title: "Owner Dashboard",
    description:
      "Orders, follower growth, and post performance in one screen.",
  },
  {
    icon: MapPin,
    title: "Local Search",
    description:
      "Customers can discover shops within their preferred distance, making local shopping faster and easier.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Local Shops",
    description:
      "Every business is verified, so customers know they are shopping from real local stores they can trust.",
  },
];

export const comparison: ComparisonRow[] = [
  {
    label: "Customers discover nearby shops",
    kirakart: "yes",
    social: "no",
    marketplace: "no",
  },
  {
    label: "Built-in ordering & order tracking",
    kirakart: "yes",
    social: "DM-based",
    marketplace: "yes",
  },
  {
    label: "Your brand stays front and center",
    kirakart: "yes",
    social: "yes",
    marketplace: "no",
  },
  {
    label: "Build loyal customers & followers",
    kirakart: "yes",
    social: "yes, no commerce",
    marketplace: "no",
  },
  {
    label: "Affordable pricing for local businesses",
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
