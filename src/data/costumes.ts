import princesaCostume from "../images/costumes/princesa-rosa.avif";
import blueQueenCostume from "../images/costumes/blue-queen.avif";
import goldFireCostume from "../images/costumes/gold-fire.avif";
import rioSunriseCostume from "../images/costumes/rio-sunrise.avif";
import emeraldEmpressCostume from "../images/costumes/emerald-empress.avif";
import bahiaBeautyCostume from "../images/costumes/bahia-beauty.avif";
import blueAngelCostume from "../images/costumes/blue-angel.avif";
import brazilianFireCostume from "../images/costumes/brazilian-fire.avif";
import passistaSunsetCostume from "../images/costumes/passista-sunset.avif";

export interface Costume {
  title: string;
  description: string;
  color: string;
  size: string;
  material: string;
  availability: string;
  price: string;
  image: any; // Using any for now since we're dealing with image imports
}

export const costumes: Costume[] = [
  {
    title: "Princesa Rosa",
    description:
      "Experience the magic of Brazilian carnival with this stunning pink and silver samba bikini costume. Handcrafted by a Brazilian atelier, this exquisite ensemble is perfect for your next samba performance. The costume includes a dazzling headpiece adorned with shimmering pink, yellow, and silver faux jewels, designed to capture the spotlight. The matching pink and silver bikini top and bottom accentuate your curves while ensuring maximum comfort and freedom of movement. Complete the look with two eye-catching wrist cuffs and leg cuffs, and a striking neckpiece that adds a touch of elegance. This costume is more than just an outfit; it's a statement piece that will make you feel confident and radiant.",
    color: "pink, silver, pops of yellow",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: princesaCostume,
  },
  {
    title: "Blue Queen",
    description:
      "Experience unparalleled glamour with this exquisite light blue and silver samba bikini costume. Crafted by skilled Brazilian ateliers, this masterpiece is designed to make you the center of attention. The costume boasts a lavish headpiece adorned with soft feathers and shimmering faux jewels, creating a truly ethereal look. The matching light blue and silver bikini top and bottom offer a sophisticated silhouette while allowing for unrestricted movement. To complete this opulent ensemble, the costume includes a stunning neckpiece, four arm and wrist cuffs, and two leg cuffs, all meticulously designed to complement the overall aesthetic.",
    color: "silver, blue, pops of white",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: blueQueenCostume,
  },
  {
    title: "Gold Fire",
    description:
      "Ignite the stage with this fiery red and gold samba bikini costume. A bold combination of passion and opulence, this ensemble exudes confidence and charisma. The bikini top and bottom are crafted in rich shades of red, complemented by dazzling gold accents. Prepare to leave an unforgettable impression with this striking and powerful look.",
    color: "red, gold",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$80",
    image: goldFireCostume,
  },
  {
    title: "Rio Sunrise",
    description:
      "Burst onto the scene with this electrifying pink and yellow samba bikini costume. A vibrant fusion of energy and joy, this ensemble is designed to captivate audiences. The bikini top and bottom are crafted in bold shades of pink and yellow, creating a striking visual impact. The costume includes a neckpiece, two arm and wrist cuffs, and two leg cuffs, each adorned with bright, contrasting colors.",
    color: "pink, yellow",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: rioSunriseCostume,
  },
  {
    title: "Emerald Empress",
    description:
      "This dazzling green and silver samba bikini costume is a testament to Brazilian craftsmanship. Adorned with shimmering silver accents and lush green feathers, this ensemble exudes a vibrant and exotic allure. The headpiece, a masterpiece of design, features a captivating blend of green and silver, complemented by the costume's intricate detailing. With a neckpiece, four arm and wrist cuffs, and two leg cuffs, this costume ensures maximum impact on the dancefloor.",
    color: "green, silver, pops of white",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: emeraldEmpressCostume,
  },
  {
    title: "Bahia Beauty",
    description:
      "Command attention with this regal blue and gold samba bikini costume. A striking combination of elegance and opulence, this ensemble exudes sophistication. The bikini top and bottom are crafted in a rich shade of blue, complemented by dazzling gold accents. The costume includes a neckpiece, two arm and wrist cuffs, and two leg cuffs, each adorned with intricate gold detailing.",
    color: "blue, gold",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: bahiaBeautyCostume,
  },
  {
    title: "Blue Angel",
    description:
      "This striking ensemble combines the vibrancy of blue with the purity of white. The blue bikini, adorned with shimmering accents, is complemented by a stunning white headpiece. The contrast between the two colors creates a fresh and elegant look. The costume includes a headpiece, bra, bikini belt, neckpiece, two arm and wrist cuffs, and two leg cuffs in a complementary shade to complete the ensemble.",
    color: "blue, white",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: blueAngelCostume,
  },
  {
    title: "Brazilian Fire",
    description:
      "This explosive costume is a fiery blend of orange, red, and silver. Designed to ignite the stage, it features a combination of vibrant hues and shimmering accents. The costume is crafted with a mix of bold orange and fiery red, complemented by striking silver details. Included is the headpiece, neckpiece, bra, bikini belt, two wrist cuffs, and two leg cuffs.",
    color: "orange, red, silver",
    size: "S",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: brazilianFireCostume,
  },
  {
    title: "Passista Sunset",
    description:
      "This captivating samba bikini costume is a vibrant fusion of pink, silver, and yellow. A symphony of color, the costume features a dazzling headpiece adorned with pink, silver, and yellow accents. The bikini top and bottom, in a flattering shade of pink, are complemented by shimmering silver details. Bold pops of yellow add a striking contrast, creating a visually stunning effect. With a headpiece, bra, bikini belt, neckpiece, four arm and wrist cuffs, and two leg cuffs, this costume is designed to command attention.",
    color: "pink, silver, yellow",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: passistaSunsetCostume,
  },
];
