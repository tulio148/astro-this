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
}

export const terms: Term[] = [
  {
    name: "Samba no Pe Beginners/Intermediate",
    level: "Beginner/Intermediate",
    dateBegin: "11th March 2026",
    dateEnd: "8th April 2026",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$110",
    bookingLink:
      "https://checkout.square.site/merchant/G3RV3Q4J8CFQJ/checkout/Q3CUDWNQV6I4NRFX34LZGM2K?src=sheet",
    description:
      "Step into the vibrant world of Brazilian samba with our fun 5-week course designed for both beginners and those with some experience! You'll learn (or refine) the samba basic step, body movement, technique, and choreography in a supportive, welcoming setting. Perfect for complete beginners ready to start their samba journey, as well as dancers wanting to strengthen and polish their fundamentals. Let's dance Samba no Pé - just like in Rio's Carnival!",
  },
  {
    name: "Samba no Pé Beginners/Intermediate",
    level: "Beginner/Intermediate",
    dateBegin: "22nd April 2026",
    dateEnd: "20th May 2026",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$110",
    bookingLink:
      "https://checkout.square.site/merchant/G3RV3Q4J8CFQJ/checkout/Q3CUDWNQV6I4NRFX34LZGM2K?src=sheet",
    description:
      "Step into the vibrant world of Brazilian samba with our fun 5-week course designed for both beginners and those with some experience! You’ll learn (or refine) the samba basic step, body movement, technique, and choreography in a supportive, welcoming setting. Perfect for complete beginners ready to start their samba journey, as well as dancers wanting to strengthen and polish their fundamentals. Let’s dance Samba no Pé - just like in Rio’s Carnival!",
  },
];
