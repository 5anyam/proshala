// app/digital-marketing-rohtak/page.tsx
import type { Metadata } from "next";
import { LocationPage, buildLocationMetadata } from "@/components/location-page";
import { getLocation } from "@/lib/data/locations";

export const metadata: Metadata = buildLocationMetadata("rohtak") as Metadata;

export default function Page() {
  return <LocationPage location={getLocation("rohtak")!} />;
}
