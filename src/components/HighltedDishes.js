// array of hightled dishes
import greekSalad from "./imgs/Salad.JPG";
import Bruchetta from "./imgs/bruchettaa.jpg";
import lemonD from "./imgs/lemon dessert.jpg";
import fishTacos from "./imgs/FishTacos.JPG";
// database for highlighted dishes
export const HightledDishes = [
  {
    Name: "Greek Salad",
    Image: greekSalad,
    Price: "10.89",
    Description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    Name: "Bruchetta",
    Image: Bruchetta,
    Price: "4.99",
    Description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    Name: "Fish Tacos",
    Image: fishTacos,
    Price: "9.99",
    Description:
      "Fish tacos made with mahi-mahi, cabbage slaw and crema from Petco Park, home of MLB’s San Diego Padres. ",
  },
  {
    Name: "Lemon Dessert",
    Image: lemonD,
    Price: "7.00",
    Description:
      "This comes straight from grandpa’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
  },
];
