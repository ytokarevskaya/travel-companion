import "server-only";
import type { TripRecord } from "@/data/trips";

const API_URL = process.env.TABIDOO_API_URL;
const API_TOKEN = process.env.TABIDOO_API_TOKEN;
const APP_ID = process.env.TABIDOO_APP_ID;
const RECORDS_TABLE_ID = process.env.TABIDOO_RECORDS_TABLE_ID;

const API = {
  GET_TABLE_DATA: `${API_URL}/${APP_ID}/tables/${RECORDS_TABLE_ID}/data`,
}

type TripRecordsResponse = {
  data: TripRecord[];
}

export async function getTripRecords(): Promise<TripRecordsResponse> {

  if (!API_URL || !API_TOKEN || !APP_ID || !RECORDS_TABLE_ID) {
    throw new Error("Tabidoo API connection is not configured.");
  }

  const response = await fetch(API.GET_TABLE_DATA, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Tabidoo request failed with status ${response.status} ${response.statusText}.`,
    );
  }

  return response.json() as Promise<TripRecordsResponse>;
}
