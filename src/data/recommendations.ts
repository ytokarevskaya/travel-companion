export type MatchLevel = "High" | "Medium";

export type Recommendation = {
  destination: string;
  type: string;
  tags: string[];
  description: string;
  reason: string;
  match: MatchLevel;
  illustration: "hills" | "water" | "forest";
};

export const recommendations: Recommendation[] = [
  {
    destination: "Pálava Hills",
    type: "Hiking & wine country",
    tags: ["Easy trails", "Views", "Local food"],
    description: "Limestone ridges, sun-warmed paths, and small wine villages made for an unhurried weekend.",
    reason: "You often rate scenic hikes highly and enjoy pairing nature with a charming town.",
    match: "High",
    illustration: "hills",
  },
  {
    destination: "Lipno",
    type: "Lakeside escape",
    tags: ["Water", "Cycling", "Relaxed"],
    description: "A calm South Bohemian break with forest cycle paths, lake views, and plenty of quiet corners.",
    reason: "It blends your love of woodland trails with the peaceful water views from Štrbské pleso.",
    match: "High",
    illustration: "water",
  },
  {
    destination: "Beskydy",
    type: "Mountain weekend",
    tags: ["Cabins", "Mountains", "Moderate"],
    description: "Soft green peaks, traditional wooden cottages, and rewarding routes through beech forests.",
    reason: "A slightly longer adventure with the mountain atmosphere and solitude you tend to enjoy.",
    match: "Medium",
    illustration: "forest",
  },
];
