export interface Person {
  name: string;
  role: string;
  specialty: string[];
  bio: string;
  image?: any;
}

export const people: Person[] = [
  {
    name: "Placeholder - Founder",
    role: "Founder & Director",
    specialty: ["Samba no pe", "Choreography", "Event direction"],
    bio: "Replace with real founder story. Include how long they have been involved in Brazilian samba, what brought the work to Perth, what drives the business direction, and what Dance Bloc Brazil should be known for.",
    image: undefined,
  },
  {
    name: "Placeholder - Lead Performer",
    role: "Lead Performer",
    specialty: ["Performance", "Workshop facilitation"],
    bio: "Replace with real performer bio, including performance experience, teaching style, and the energy they bring to events and classes.",
    image: undefined,
  },
];
