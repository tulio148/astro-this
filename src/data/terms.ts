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
    dateBegin: "2nd September 2026",
    dateEnd: "30th September 2026",
    scheduleDay: "Wednesday",
    time: "6:45pm - 7:30pm",
    location: "Balcatta",
    price: "$100",
    bookingLink: "https://square.link/u/0GGEQ9t7?src=sheet",
    detailPage: "/beginner-samba-classes-perth",
    description: `Perfect for absolute beginners!

Ready to discover the energy and joy of Brazilian samba? This fun and welcoming class is designed for anyone starting their samba journey.

We’ll learn the Samba no Pé basic step, develop your rhythm, musicality and timing, and explore fun combinations that will get you moving to the music and feeling more confident with every class. Expect plenty of guidance, encouragement and, most importantly, lots of samba!

No experience needed - just bring your energy and get ready to dance!`,
  },
  {
    name: "Samba no Pé – Intermediate",
    level: "Intermediate",
    dateBegin: "2nd September 2026",
    dateEnd: "30th September 2026",
    scheduleDay: "Wednesday",
    time: "7:30pm - 8:30pm",
    location: "Balcatta",
    price: "$110",
    bookingLink: "https://square.link/u/h0133nbG?src=sheet",
    detailPage: "/intermediate-samba-classes-perth",
    description: `For dancers with samba experience.

Ready to take your samba to the next level? This class is designed for dancers who already know the samba basic and want to refine their technique, develop stronger musicality and timing, build stamina, and take on more challenging choreography.

We’ll explore passista-style samba, focusing on the sharp, dynamic and expressive movement that gives Brazilian samba its signature energy. Expect technique drills, styling, musicality, footwork and fun choreography designed to challenge you and help you grow as a dancer.

Expect a challenge, plenty of progression, and lots of samba energy!`,
  },
  {
    name: "Samba no Pé – Beginner + Intermediate COMBO",
    level: "Beginner + Intermediate",
    dateBegin: "2nd September 2026",
    dateEnd: "30th September 2026",
    scheduleDay: "Wednesday",
    time: "6:45pm - 8:30pm",
    location: "Balcatta",
    price: "$140",
    bookingLink: "https://square.link/u/zB4byEpj?src=sheet",
    detailPage: "/samba-classes-perth",
    description: `Two classes, back-to-back - with a discounted COMBO price!

Want to build a strong samba foundation and challenge yourself with more advanced movement?

The Beginner + Intermediate COMBO gives you the best of both worlds.

The Beginner class (6:45–7:30pm) focuses on the Samba no Pé basic step, rhythm, musicality, timing and coordination, with fun combinations to help you build confidence and feel comfortable moving to the music.

The Intermediate class (7:30–8:30pm) takes things further with more challenging choreography, technique, styling, musicality and passista-style samba.

The COMBO is perfect for dancers with previous samba experience who want to refresh and strengthen their basics before progressing.`,
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
    dateBegin: "Wednesday, 26 August 2026",
    dateEnd: "Wednesday, 26 August 2026",
    dateLabel: "One-off class",
    scheduleDay: "Wednesday",
    time: "7:00 - 8:00pm",
    location: "5/5 Cressall Road, Balcatta",
    price: "$15",
    bookingLink: "https://square.link/u/5WpAPM1I?src=sheet",
    detailPage: "/brazil-fit",
    description: `Jump in to a fun, high-energy Brazilian Funk class at Dance Bloc Brazil! Whether you've danced Brazilian Funk before or you're trying it for the very first time.

Brazilian Funk is known for its vibrant music, dynamic movement, and infectious energy. In this class, you'll dance to popular Brazilian music in a welcoming and supportive environment, while enjoying a great workout and plenty of laughs along the way.

No prior Funk experience is needed - just come along ready to move, have fun, and try something new. Suitable for all levels.`,
  },
];
