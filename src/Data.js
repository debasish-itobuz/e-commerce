import mobile from "./assets/header/mobiles.webp";
import tv from "./assets/header/appliances.webp";
import electronics from "./assets/header/electronics.webp";
import fashion from "./assets/header/fashion.webp";
import toys from "./assets/header/toys.webp";
import furniture from "./assets/header/furniture.png";
import travel from "./assets/header/travel.webp";
import bike from "./assets/header/bike.webp";

import acer from "./assets/laptop/acer.webp";
import apple from "./assets/laptop/apple.webp";
import asus from "./assets/laptop/asus.webp";
import hp from "./assets/laptop/hp.webp";
import lenovo from "./assets/laptop/lenovo.webp";
import samsung from "./assets/laptop/samsung.webp";
import vaio from "./assets/laptop/vaio.webp";
import dell from "./assets/laptop/dell.webp";

const headerData = [
  {
    name: "Mobile",
    image: mobile,
  },
  {
    name: "Appliances",
    image: tv,
  },
  {
    name: "Electronics",
    image: electronics,
  },
  {
    name: "Fashion",
    image: fashion,
  },
  {
    name: "Toys",
    image: toys,
  },
  {
    name: "Furniture",
    image: furniture,
  },
  {
    name: "Travel",
    image: travel,
  },
  {
    name: "Bike",
    image: bike,
  },
];

const laptopData = [
  {
    name: "Acer",
    image: acer,
    price: 56000,
    related: [
      {
        name: "Acer1",
        ram:"8 GB",
        color:"Silver",
        processorName:"Core i5",
        touchScreen: "No",
        os:"Win 11",
        image: acer,
        price: 56000,
      },
      {
        name: "Acer2",
        ram:"6 GB",
        color:"Black",
        processorName:"Core i7",
        touchScreen: "No",
        os:"Win 10",
        image: dell,
        price: 35000,
      },
      {
        name: "Acer3",
        ram:"4 GB",
        color:"Gray",
        processorName:"Core i9",
        touchScreen: "Yes",
        os:"Win 11",
        image: samsung,
        price: 60000,
      },
      {
        name: "Acer4",
        ram:"8 GB",
        color:"White",
        processorName:"Core i3",
        touchScreen: "No",
        os:"Win 10",
        image: apple,
        price: 78000,
      },
      {
        name: "Acer5",
        ram:"16 GB",
        color:"Silver",
        processorName:"Core i7",
        touchScreen: "Yes",
        os:"Win 11",
        image: acer,
        price: 29000,
      },
      {
        name: "Acer6",
        ram:"6 GB",
        color:"Black",
        processorName:"Core i10",
        touchScreen: "Yes",
        os:"Win 11",
        image: vaio,
        price: 43000,
      },
      {
        name: "Acer7",
        ram:"4 GB",
        color:"Gray",
        processorName:"Core i8",
        touchScreen: "No",
        os:"Win 10",
        image: apple,
        price: 78000,
      },
      {
        name: "Acer8",
        ram:"6 GB",
        color:"White",
        processorName:"Core i6",
        touchScreen: "No",
        os:"Win 10",
        image: acer,
        price: 63000,
      },
      {
        name: "Acer9",
        ram:"4 GB",
        color:"Blue",
        processorName:"Core i10",
        touchScreen: "Yes",
        os:"Win 10",
        image: dell,
        price: 52000,
      },
      {
        name: "Acer10",
        ram:"8 GB",
        color:"Red",
        processorName:"Core i5",
        touchScreen: "No",
        os:"Win 10",
        image: apple,
        price: 31000,
      },
    ],
  },
  {
    name: "Apple",
    image: apple,
    price: 150000,
  },
  {
    name: "Asus",
    image: asus,
    price: 60000,
  },
  {
    name: "Dell",
    image: dell,
    price: 32000,
  },
  {
    name: "HP",
    image: hp,
    price: 44000,
  },
  {
    name: "Lenovo",
    image: lenovo,
    price: 76000,
  },
  {
    name: "Samsung",
    image: samsung,
    price: 30000,
  },
  {
    name: "Vaio",
    image: vaio,
    price: 50000,
  },
];

export { headerData, laptopData };
