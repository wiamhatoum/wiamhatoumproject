import mozzarellaSticks from '../images/apetizers/mozarellasticks.jpg'
import garlicBread from '../images/apetizers/garlicbread.jpg'
import Nachos from '../images/apetizers/nachos.jpg'
import OnionRings from '../images/apetizers/onionrings.jpg'
import Wedges from '../images/apetizers/wedges.jpg'
import Fries from '../images/apetizers/fries.jpg'
import Edamame from '../images/apetizers/edamame.jpg'
import ChickenBurger from '../images/burger/chickenburger.jpg'
import BeefBurger from '../images/burger/beefburger.jpg'
import ZingerBurger from '../images/burger/zingerburger.jpg'
import Crispy from '../images/sandwiches/crispy.jpg'
import Fajita from '../images/sandwiches/fajita.jpg'
import Francisco from '../images/sandwiches/francisco.webp'
import Taouk from '../images/sandwiches/taouk.jpg'
import PhilliCheeseSteak from '../images/sandwiches/philicheesesteak.jpg'
import PepperoniPizza from '../images/pizza/pepperonipizza.jpeg'
import VegeterianPizza from '../images/pizza/vegeterianpizza.png'
import PestoHalloumi from '../images/pizza/pestohalloumi.jpg'
import MargheritaPizza from '../images/pizza/margheritapizza.webp'
import Americano from '../images/hotbeverages/Americano.webp'
import cappuccino from '../images/hotbeverages/cappuccino.png'
import blacktea from '../images/hotbeverages/blacktea.webp'
import cafelatte from '../images/hotbeverages/cafe latte.webp'
import espresso from '../images/hotbeverages/espresso.webp'
import greentea from '../images/hotbeverages/greentea.webp'
import hotchocolate from '../images/hotbeverages/hotchocolate.jpg'
import icedamericano from '../images/coldbeverages/icedamericano.jpg'
import icedlatte  from '../images/coldbeverages/icedlatte.jpg'
import coldbrew from '../images/coldbeverages/coldbrew.webp'
import strawberrysmothie from '../images/coldbeverages/strawberrysmothie.avif'
import avocadosmothie from '../images/coldbeverages/avocadosmothie.webp'
import orangejuice from '../images/coldbeverages/orangejuice.jpg'
import applejuice from '../images/coldbeverages/applejuice.jpg'
import applesheesha1 from '../images/argili/applesheesha1.webp'
import grapesheesha from '../images/argili/grapeshisha.webp'
import lemonsheesha from '../images/argili/lemon-shisha.webp'
import brownie from '../images/Desseret/brownie.jpg'
import cheesecake from '../images/Desseret/cheesecake.jpg'
import chocolatelavacake from '../images/Desseret/chocolatelavacake.webp'
import pancake from '../images/Desseret/pancake.jpg'
import waffle from '../images/Desseret/waffle.jpg'











export const MenuList = {
  
  Appetizers:[
  {
    name: "Edamame",
    image: Edamame,
    ingredients: "Steamed soybeans, sea salt.",
    price: 3,

  },
  {
    name: "French Fries",
    image: Fries,
    ingredients: "Crispy golden fries, house seasoning.",
    price: 4,
  },
  {
    name: "Potato Wedges",
    image: Wedges,
    ingredients: "Crispy potato wedges, spicy dip.",
    price: 4,
  },
  {
    name: "Mozzarella Sticks",
    image: mozzarellaSticks,
    ingredients: "Crispy breaded mozzarella sticks.",
    price: 5,
  },
  {
    name: "Nachos",
    image: Nachos,
    ingredients: "Crispy tortilla chips, melted cheese, jalapeños, salsa.",
    price: 8,
  },
  {
    name: "Garlic Bread",
    image: garlicBread,
    ingredients: "Toasted baguette, garlic butter, parsley.",
    price: 5,
  },
  {
    name: "Onion Rings",
    image: OnionRings,
    ingredients: "Crispy battered onion rings.",
    price: 4,
  }],

  Pizzas: [
  {
    name: "Margherita Pizza",
    image: MargheritaPizza,
    ingredients: "Margherita Sauce, Mozzarella, Fresh Basil.",
    price: 12.99,
  },
  {
    name: "Pepperoni Pizza",
    image: PepperoniPizza,
    ingredients: "Pepperoni, Mozzarella, Marinara Sauce.",
    price: 14,
  },
  {
    name: "Vegeterian Pizza",
    image: VegeterianPizza,
    ingredients: "Vegetables, Mozzarella, Pesto Sauce.",
    price: 13,
  },
  {
    name: "Pesto Halloumi Pizza",
    image: PestoHalloumi,
    ingredients: "Halloumi cheese, Pesto Sauce, Cherry Tomatoes.",
    price: 15,
  }],

  Burgers: [
  {
    name: "Beef Burger",
    image: BeefBurger,
    ingredients: "Juicy beef patty, cheddar cheese, lettuce, tomato, special sauce.",
    price: 11,
  },
  {
    name: "Chicken Burger",
    image: ChickenBurger,
    ingredients: "Juicy chicken patty, lettuce, tomato, garlic sauce.",
    price: 10,
  },
  {
    name: "Zinger Burger",
    image: ZingerBurger,
    ingredients: "Spicy chicken fillet, cheddar cheese, lettuce, tomato, mayo.",
    price: 12,
  }],
  Sandwiches: [
  {
    name: "Crispy Sandwich",
    image: Crispy,
    ingredients: "Crispy chicken, lettuce, pickles, mayo.",
    price: 9,
  },
  {
    name: "Fajita Sandwich",
    image: Fajita,
    ingredients: "Grilled chicken, bell peppers, onions, fajita sauce.",
    price: 10,
  },
  {
    name: "Philly Cheese Steak",
    image: PhilliCheeseSteak,
    ingredients: "Sliced beef, melted cheese, caramelized onions, peppers.",
    price: 14,
  },
  {
    name: "Francisco Sandwich",
    image: Francisco,
    ingredients: "Marinated chicken breast, cheese, lettuce, pickles, mayo.",
    price: 11,
  },
  {
    name: "Taouk Sandwich",
    image: Taouk,
    ingredients: " Taouk, garlic sauce, pickles, fries.",
    price: 9,
  }],

  HotBeverages: [
  {
    name: "Espresso",
    image: espresso,
    ingredients: "Rich, concentrated coffee shot.",
    price: 3,

  },
  {
    name: "Americano",
    image: Americano,
    ingredients: "Espresso, hot water.",
    price: 3,

  },
  {
    name: "Cappuccino",
    image: cappuccino,
    ingredients: "Espresso, steamed milk, milk foam.",
    price: 3,

  },
  {
    name: "Café Latte",
    image: cafelatte,
    ingredients: "Espresso, steamed milk, light foam.",
    price: 4,

  },
  {
    name: "Hot Chocolate",
    image: hotchocolate,
    ingredients: "Rich chocolate, steamed milk, whipped cream.",
    price: 5,

  },
  {
    name: "Black Tea",
    image: blacktea,
    ingredients: "Black tea leaves, hot water.",
    price: 3,

  },
  {
    name: "Green Tea",
    image: greentea,
    ingredients: "Green tea leaves, hot water.",
    price: 3,

  }],
  ColdBeverages: [
  {
    name: "Iced Americano",
    image: icedamericano,
    ingredients: "Espresso, cold water, ice.",
    price: 4,

  },
  {
    name: "Iced Latte",
    image: icedlatte,
    ingredients: "Espresso, cold milk, ice.",
    price: 5,

  },
  {
    name: "Cold Brew",
    image: coldbrew,
    ingredients: "Slow-brewed coffee, served chilled.",
    price: 4,

  },
  {
    name: "Strawberry Smoothie",
    image: strawberrysmothie,
    ingredients: "Fresh strawberries, yogurt, milk.",
    price: 5,

  },
  {
    name: "Avocado Smoothie",
    image: avocadosmothie,
    ingredients: "Fresh avocados, yogurt, milk.",
    price: 5,

  },
  {
    name: "Orange Juice",
    image: orangejuice,
    ingredients: "Freshly squeezed oranges.",
    price: 3,

  },
  {
    name: "Apple Juice",
    image: applejuice,
    ingredients: "Freshly squeezed apples.",
    price: 3,

  }],

  Sheesha: [
  {
    name: "Apple Sheesha",
    image: applesheesha1,
    ingredients: "Apple flavored tobacco.",
    price: 10,
  },
  {
    name: "Grape Sheesha",
    image: grapesheesha,
    ingredients: "Grape flavored tobacco",
    price: 10,
  },
  {
    name: "Lemon Sheesha",
    image: lemonsheesha,
    ingredients: "Lemon flavored tobacco",
    price: 10,
  }],
  Desserts: [
    {
    name: "Brownie",
    image: brownie,
    ingredients: "Rich chocolate brownie",
    price: 4,

    },
    {
    name: "Cheesecake",
    image: cheesecake,
    ingredients: "Creamy cheesecake, biscuit base, berry sauce",
    price: 5,

    },
    {
    name: "Chocolate Lava Cake",
    image: chocolatelavacake,
    ingredients: "Rich chocolate lava cake",
    price: 7,

    },
    {
    name: "Pancake",
    image: pancake,
    ingredients: "Fluffy pancakes served with syrup",
    price: 7,

    },
    {
    name: "Waffle",
    image: waffle,
    ingredients: "Waffles served with syrup",
    price: 10,

    }
    
  ]


  
  
  
  
  
  
};