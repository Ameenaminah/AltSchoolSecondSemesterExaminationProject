
const projects = [
  {
    id: 1,
    category: "Rice",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    price: 20,
    image: "../public/images/jollof.jpg",
    name: "Jollof Rice",
  },

  {
    id: 2,
    image: "../public/images/cheese.jpg",
    category: "Burger",
    name: "Cheeseburger",
    "description ":
      "Lorem, ipsum dolor sit amet consectetur adipisicin…e ab modi non quo repudiandae soluta quaerat sed.",
    price: 10,
  },

  {
    id: 3,
    image: "../public/images/vanilla.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    price: 8,
    name: "Vanilla Ice Cream",
    category: "Ice-Cream",
  },

  {
    category: "Rice",
    id: 4,
    image: "../public/images/chinese.jpg",
    name: "Chinese Rice",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    price: 50,
  },

  {
    name: "Beef burgers",
    "category ": "Burger",
    price: 12,
    "description ":
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    id: 5,
    image: "../public/images/beef.jpg",
  },

  {
    category: "Burger",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicin…e ab modi non quo repudiandae soluta quaerat sed.",
    name: "Veggie burger",
    price: 15,
    id: 6,
    image: "../public/images/veggie.jpg",
  },
  {
    category: "Ice-Cream",
    price: 12,
    name: "Strawberry Ice Cream",
    id: 7,
    image: "../public/images/strawbeerry.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
  },

  {
    category: "Rice",
    price: 30,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    id: 8,
    image: "../public/images/fried.jpg",
    name: "Fried Rice",
  },

  {
    price: 12,
    name: "Chocolate Ice Cream",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicin…hil ex in voluptate! Asperiores ut ipsam sint ea.",
    id: 9,
    image: "../public/images/chocolate.jpg",
    category: "Ice-Cream",
  },
];

const links = [
  {
    id: 1,
    link: "Home",
    to: ".",
  },
  {
    id: 2,
    link: "Foods",
    to: "foods",
  },
  {
    id: 3,
    link: "About",
    to: "about",
  },
  {
    id: 4,
    link: "Menu",
    to: "menu",
  },

  {
    id: 5,
    link: "Contact",
    to: "contact",
  },
  {
    id: 6,
    link: "Blog",
    to: "blog",
  },
];
const menuLinks = [
  {
    id: 1,
    link: "Dashboard",
    to: ".",
    end: true,
  },
  {
    id: 2,
    link: "Income",
    to: "income",
    end: false,
  },
  {
    id: 3,
    link: "Foods",
    to: "foods",
    end: false,
  },
  {
    id: 4,
    link: " Reviews",
    to: "reviews",
    end: false,
  },
];

export { links, projects, menuLinks };
