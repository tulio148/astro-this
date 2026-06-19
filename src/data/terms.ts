export interface Term {
  name: string;
  level: string;
  dateBegin: string;
  dateEnd: string;
  dateLabel?: string;
  time: string;
  location: string;
  price: string;
  bookingLink: string;
  detailPage?: string;
  description: string;
  showDetails?: boolean;
  scheduleDay?: string;
}

export const terms: Term[] = [
  {
    name: "Samba no Pé – Beginners",
    level: "Beginner",
    dateBegin: "22nd July 2026",
    dateEnd: "19th August 2026",
    scheduleDay: "Wednesday",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$110",
    bookingLink: "https://square.link/u/0GGEQ9t7?src=sheet",
    detailPage: "/beginner-samba-classes-perth",
    description: `Perfect for absolute beginners.

Step into the vibrant world of Brazilian samba with a course designed especially for those starting their journey. You’ll learn the samba basic step, build confidence in your movement, and develop rhythm and coordination in a fun, supportive environment.

Class structure:

First 30min (7:00–7:30pm)
A beginner-focused session covering samba basics, technique, and simple steps, with plenty of guidance and individual feedback.

Second 30min (7:30–8:00pm)
Join our intermediate dancers for a fun, high-energy choreography session. This section is designed to be beginner-friendly, with options to suit all levels - helping you build confidence, coordination, and enjoy the full samba vibe.`,
  },
  {
    name: "Samba no Pé – Intermediate",
    level: "Intermediate",
    dateBegin: "22nd July 2026",
    dateEnd: "19th August 2026",
    scheduleDay: "Wednesday",
    time: "7:30pm - 8:30pm",
    location: "Balcatta",
    price: "$110",
    bookingLink: "https://square.link/u/h0133nbG?src=sheet",
    detailPage: "/intermediate-samba-classes-perth",
    description: `For dancers with some samba experience.

Ready to level up? This class is designed for dancers who already know the samba basic and want to refine technique, build stamina, and take on more challenging choreography.

Class structure:

First 30min (7:30–8:00pm)
Begin with a shared, high-energy choreography session alongside the beginner group. This section focuses on coordination, musicality, arm styling, and endurance through a dynamic routine, helping you build performance quality.

Second 30min (8:00–8:30pm)
A dedicated intermediate session with more focused technique work, drills, and skill development to help you clean your movement and progress with confidence.

Expect a challenge, plenty of growth, and lots of samba energy.`,
  },
  {
    name: "Samba no Pé – Casual Class",
    level: "Casual",
    dateBegin: "",
    dateEnd: "",
    scheduleDay: "Casual",
    time: "",
    location: "",
    price: "$25",
    bookingLink: "https://square.link/u/i9DNtnt3?src=sheet",
    detailPage: "/samba-classes-perth",
    description:
      "Can’t make the full term but still want to join here and there? No problem. Jump into class whenever it suits you.",
    showDetails: false,
  },
  {
    name: "Brazil Fit",
    level: "Brazil Fit",
    dateBegin: "1 July 2026",
    dateEnd: "1 July 2026",
    dateLabel: "One-off class",
    scheduleDay: "One-off",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$15",
    bookingLink: "https://square.link/u/5WpAPM1I?src=sheet",
    detailPage: "/brazil-fit",
    description: `Get ready for a fun, high-energy Brazil Fit class at Dance Bloc Brazil! This special one-off class is open to everyone; whether you've danced Brazilian Funk before or you're trying it for the very first time.

Brazilian Funk is known for its vibrant music, dynamic movement, and infectious energy. In this class, you'll learn exciting choreography in a welcoming and supportive environment, while enjoying a great workout and plenty of laughs along the way.

No prior Brazilian Funk experience is needed - just come along ready to move, have fun, and try something new. Suitable for all levels.`,
  },
];
