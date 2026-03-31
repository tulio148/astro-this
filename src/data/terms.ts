export interface Term {
  name: string;
  level: string;
  dateBegin: string;
  dateEnd: string;
  time: string;
  location: string;
  price: string;
  bookingLink: string;
  description: string;
  showDetails?: boolean;
}

export const terms: Term[] = [
  {
    name: "Samba no Pé – Beginners",
    level: "Beginner",
    dateBegin: "22nd April 2026",
    dateEnd: "20th May 2026",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$110 ",
    bookingLink:
      "https://checkout.square.site/merchant/G3RV3Q4J8CFQJ/checkout/Q3CUDWNQV6I4NRFX34LZGM2K?src=sheet",
    description: `Perfect for absolute beginners.

Step into the vibrant world of Brazilian samba with a course designed especially for those starting their journey. You’ll learn the samba basic step, build confidence in your movement, and develop rhythm and coordination in a fun, supportive environment.

Class structure:

First 30min (7:00–7:30pm)
A beginner-focused session covering samba basics, technique, and simple steps, with plenty of guidance and individual feedback.

Second 30 minutes (7:30–8:00pm)
Join our intermediate dancers for a fun, high-energy choreography session. This section is designed to be beginner-friendly, with options to suit all levels - helping you build confidence, coordination, and enjoy the full samba vibe.`,
  },
  {
    name: "Samba no Pé – Intermediate",
    level: "Intermediate",
    dateBegin: "22nd April 2026",
    dateEnd: "20th May 2026",
    time: "7:30pm - 8:30pm",
    location: "Balcatta",
    price: "$110",
    bookingLink: "https://square.link/u/h0133nbG?src=sheet",
    description: `For dancers with some samba experience.

Ready to level up? This class is designed for dancers who already know the samba basic and want to refine technique, build stamina, and take on more challenging choreography.

Class structure:

First 30min (7:30–8:00pm)
Begin with a shared, high-energy choreography session alongside the beginner group. This section focuses on coordination, musicality, arm styling, and endurance through a dynamic routine, helping you build performance quality.

Second 30 minutes (8:00–8:30pm)
A dedicated intermediate session with more focused technique work, drills, and skill development to help you clean your movement and progress with confidence.

Expect a challenge, plenty of growth, and lots of samba energy.`,
  },
  {
    name: "Samba no Pé – Casual Class",
    level: "Casual",
    dateBegin: "",
    dateEnd: "",
    time: "",
    location: "",
    price: "",
    bookingLink: "https://square.link/u/i9DNtnt3?src=sheet",
    description:
      "Can’t make the full term but still want to join here and there? No problem. Jump into class whenever it suits you.",
    showDetails: false,
  },
];
