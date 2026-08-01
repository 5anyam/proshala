// app/digital-marketing-bahadurgarh/page.tsx
import type { Metadata } from "next";
import { LocationPage, buildLocationMetadata } from "@/components/location-page";
import { getLocation } from "@/lib/data/locations";

export const metadata: Metadata = buildLocationMetadata("bahadurgarh") as Metadata;

export default function Page() {
  return <LocationPage location={getLocation("bahadurgarh")!} />;
}
