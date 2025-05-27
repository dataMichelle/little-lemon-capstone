import greekSalad from "../assets/greek-salad.png";
import bruschetta from "../assets/serving-bruschetta.png";
import lemonDessert from "../assets/lemon-dessert.png";

const specials = [
  {
    id: 1,
    image: greekSalad,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Crisp lettuce, peppers, olives, and feta cheese, dressed with our house vinaigrette.",
  },
  {
    id: 2,
    image: bruschetta,
    name: "Bruschetta",
    price: "$8.99",
    description:
      "Grilled bread topped with garlic, tomatoes, olive oil, and basil.",
  },
  {
    id: 3,
    image: lemonDessert,
    name: "Lemon Dessert",
    price: "$5.99",
    description: "A sweet and tangy lemon dessert to finish your meal.",
  },
];

export default specials;
