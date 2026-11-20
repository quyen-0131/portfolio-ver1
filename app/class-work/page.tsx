import type { Metadata } from "next";
import { ClassWork } from "@/components/work/ClassWork";

export const metadata: Metadata = { title: "Class work" };

export default function ClassWorkPage() {
  return <ClassWork />;
}
