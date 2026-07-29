import { TripCard } from "@/components/TripCard";
import type { TripRecord } from "@/data/trips";
import { getTripRecords } from "@/services/tabidoo";
import { unstable_rethrow } from "next/navigation";
import { Suspense } from "react";

async function TripListContent() {
  const records: TripRecord[] = [];
  let hasError = false;

  try {
    const result = await getTripRecords();
    console.log("Tabidoo trip records:", result.data);
    records.push(...result.data);
  } catch (error) {
    unstable_rethrow(error);
    console.error("Unable to fetch Tabidoo trip records:", error);
    hasError = true;
  }

  if (hasError) {
    return (
      <p role="alert">
        We couldn&apos;t load your trips. Please try again later.
      </p>
    );
  }

  if (records.length === 0) {
    return <p>You haven&apos;t added any trips yet.</p>;
  }

  return (
    <>
      {records.map((record) => (
        <TripCard key={record.fields.x_ID} trip={{...record.fields}} />
      ))}
    </>
  );
}

export function TripList() {
  return (
    <Suspense fallback={<p aria-live="polite">Loading your trips…</p>}>
      <TripListContent />
    </Suspense>
  );
}
