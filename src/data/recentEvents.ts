export interface RecentEvent {
  type: string;
  format: string;
  suburb: string;
  period: string;
  highlight: string;
}

export const recentEvents: RecentEvent[] = [
  {
    type: "Corporate Gala",
    format: "Feature show + roving",
    suburb: "Perth CBD",
    period: "Early 2025",
    highlight: "250-guest gala dinner",
  },
  {
    type: "Wedding Reception",
    format: "Feature show",
    suburb: "Swan Valley",
    period: "Late 2024",
    highlight: "Reception entrance moment",
  },
  {
    type: "Product Launch",
    format: "Opening performance",
    suburb: "Northbridge",
    period: "Mid 2024",
    highlight: "Brand activation",
  },
  {
    type: "Hens Party",
    format: "Workshop + show",
    suburb: "Subiaco",
    period: "Early 2025",
    highlight: "Private venue workshop and performance",
  },
  {
    type: "Wedding Reception",
    format: "Feature show + entrance",
    suburb: "Margaret River",
    period: "Late 2024",
    highlight: "Vineyard wedding reception",
  },
  {
    type: "Festival",
    format: "Roving entertainment",
    suburb: "Perth CBD",
    period: "Late 2024",
    highlight: "Outdoor activation",
  },
  {
    type: "Award Night",
    format: "Feature show",
    suburb: "East Perth",
    period: "Mid 2025",
    highlight: "Post-awards entertainment",
  },
];
