// app/digital-marketing-panipat/page.tsx
import type { Metadata } from "next";
import { LocationPage, buildLocationMetadata } from "@/components/location-page";
import { getLocation } from "@/lib/data/locations";

export const metadata: Metadata = buildLocationMetadata("panipat") as Metadata;

export default function Page() {
  return <LocationPage location={getLocation("panipat")!} />;
}
