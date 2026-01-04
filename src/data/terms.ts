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
    name: "Samba no Pe Beginners",
    level: "Beginner",
    dateBegin: "15th January 2026",
    dateEnd: "12nd February 2026",
    time: "7:40pm - 8:30pm",
    location: "Balcatta",
    price: "$110",
    bookingLink:
      "https://checkout.square.site/merchant/G3RV3Q4J8CFQJ/checkout/Q3CUDWNQV6I4NRFX34LZGM2K?src=sheet",
    description:
      "Step into the vibrant world of Brazilian samba with our fun 5-week beginner course! Learn the samba basic step, body movement, technique, and choreography in a supportive setting. Perfect for complete beginners or anyone wanting to refresh their fundamentals. Let's dance Samba no Pé—just like in Rio's Carnival!",
  },
];
