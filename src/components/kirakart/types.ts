import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Pain = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ComparisonRow = {
  label: string;
  kirakart: "yes" | "no" | "partial" | string;
  social: "yes" | "no" | "partial" | string;
  marketplace: "yes" | "no" | "partial" | string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Order = {
  id: string;
  customer: string;
  item: string;
  status: "New" | "Packed" | "Delivered";
  amount: string;
};
