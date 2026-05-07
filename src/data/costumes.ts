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
      "A pink and silver samba bikini costume with yellow accents, a feathered headpiece, neckpiece, wrist cuffs, and leg cuffs. Handcrafted by a Brazilian atelier and suited to performances, themed events, and photoshoots.",
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
      "A light blue and silver samba bikini costume with a feathered headpiece, neckpiece, arm and wrist cuffs, and leg cuffs. A polished option for stage performances, Carnival-style events, and visual activations.",
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
      "A red and gold samba bikini costume with strong colour contrast and stage-ready detailing. Suitable for performances, themed parties, and event entertainment.",
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
      "A bright pink and yellow samba bikini costume with matching neckpiece, arm and wrist cuffs, and leg cuffs. A vivid choice for photoshoots, performances, and Carnival-inspired events.",
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
      "A green and silver samba bikini costume with feathered headpiece, neckpiece, arm and wrist cuffs, and leg cuffs. The green feather detail creates a strong Carnival-style silhouette.",
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
      "A blue and gold samba bikini costume with neckpiece, arm and wrist cuffs, and leg cuffs. A strong colourway for stage, themed events, and performance bookings.",
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
      "A blue and white samba costume with headpiece, bra, bikini belt, neckpiece, arm and wrist cuffs, and leg cuffs. The blue and white contrast gives the outfit a clean, bright stage look.",
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
      "An orange, red, and silver samba costume with headpiece, neckpiece, bra, bikini belt, wrist cuffs, and leg cuffs. A warm colour palette for Carnival-style events and performances.",
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
      "A pink, silver, and yellow samba bikini costume with headpiece, bra, bikini belt, neckpiece, arm and wrist cuffs, and leg cuffs. A colourful option for performers and themed event styling.",
    color: "pink, silver, yellow",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: passistaSunsetCostume,
  },
];
