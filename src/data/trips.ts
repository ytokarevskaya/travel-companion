export type Trip = {
  id: string;
  destination: string;
  date: string;
  type: string;
  rating: number;
  note: string;
  landscape: "rocks" | "castle" | "lake" | "forest" | "town" | "cliffs";
};

export const trips: Trip[] = [
  { id: "prachovske-skaly", destination: "Prachovské skály", date: "12 May 2025", type: "Hiking", rating: 5, note: "Sandstone paths, quiet lookouts, and a perfect picnic above the trees.", landscape: "rocks" },
  { id: "karlstejn", destination: "Karlštejn", date: "27 April 2025", type: "Day trip", rating: 4, note: "A slow walk through the village followed by castle views in soft spring rain.", landscape: "castle" },
  { id: "strbske-pleso", destination: "Štrbské pleso", date: "16 March 2025", type: "Mountains", rating: 5, note: "Crisp mountain air and the lake reflecting the last snow of the season.", landscape: "lake" },
  { id: "krivoklatsko", destination: "Křivoklátsko", date: "8 October 2024", type: "Nature", rating: 5, note: "Copper leaves, mossy trails, and the kind of silence that stays with you.", landscape: "forest" },
  { id: "cesky-krumlov", destination: "Český Krumlov", date: "21 August 2024", type: "City break", rating: 4, note: "Wandering painted lanes and watching the Vltava curl around the old town.", landscape: "town" },
  { id: "adrspach", destination: "Adršpach", date: "6 July 2024", type: "Adventure", rating: 5, note: "A storybook maze of stone towers, hidden passages, and emerald water.", landscape: "cliffs" },
];
