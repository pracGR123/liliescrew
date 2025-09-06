import { Recipe } from '../types/types';

export const recipes: Recipe[] = [
  // BOX MEALS
  {
    id: 'all-stars-box',
    name: 'All Stars Box',
    category: 'boxMeal',
    ingredients: [
      { id: 'burger-choice', name: 'The Star OR Chicken Sando', image: '🍔' },
      { id: 'tenders', name: '2 All Stars Tenders', image: '🍗' },
      { id: 'loaded-fries', name: 'Reg Fries with Donner/Grilled Chicken', image: '🍟' },
      { id: 'garlic-mayo', name: 'Garlic Mayo', image: '🥫' },
      { id: 'all-stars-sauce', name: 'All Stars Sauce', image: '🥫' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
      { id: 'soft-drink', name: 'Any Soft Drink', image: '🥤' },
    ],
    price: 13.99,
  },
  {
    id: 'munch-box',
    name: 'Munch Box',
    category: 'boxMeal',
    ingredients: [
      { id: 'chicken-sando', name: 'Chicken Sando', image: '🍔' },
      { id: 'wings-or-tenders', name: '3 Munchies Peri Wings/2 Original Crispy Tenders', image: '🍗' },
      { id: 'fries-choice', name: 'Choice of Reg/Peri/Curly Fries', image: '🍟' },
      { id: 'soft-drink', name: 'Any Soft Drink', image: '🥤' },
    ],
    price: 11.00,
  },
  {
    id: 'nashville-box',
    name: "Flamin' Nashville Box",
    category: 'boxMeal',
    ingredients: [
      { id: 'spicy-burger', name: 'Spicy Nashville/Naga Smashed', image: '🍔' },
      { id: 'wings-or-tenders', name: '3 Naga Wings/2 Nashville Chilli Tenders', image: '🍗' },
      { id: 'fries-choice', name: 'Choice of Reg/Peri/Curly Fries', image: '🍟' },
      { id: 'soft-drink', name: 'Any Soft Drink', image: '🥤' },
    ],
    price: 13.00,
  },
  {
    id: 'memphis-bbq-box',
    name: 'Memphis BBQ Box',
    category: 'boxMeal',
    ingredients: [
      { id: 'buffalo-tower', name: 'Buffalo Tower', image: '🍔' },
      { id: 'wings-or-tenders', name: '3 Memphis BBQ Wings/2 Memphis BBQ Tenders', image: '🍗' },
      { id: 'fries-choice', name: 'Choice of Reg/Peri/Curly Fries', image: '🍟' },
      { id: 'soft-drink', name: 'Any Soft Drink', image: '🥤' },
    ],
    price: 13.00,
  },
  {
    id: 'get-hench-box',
    name: 'Get Hench Box',
    category: 'boxMeal',
    ingredients: [
      { id: 'grilled-chicken', name: 'Grilled Chicken (Choose flavour)', image: '🍗' },
      { id: 'grilled-wings', name: '3 Grilled Wings', image: '🍗' },
      { id: 'corn-ribs', name: 'Corn Ribs', image: '🌽' },
      { id: 'fries-choice', name: 'Choice of Reg/Peri/Curly Fries', image: '🍟' },
      { id: 'soft-drink', name: 'Any Soft Drink', image: '🥤' },
    ],
    price: 15.00,
  },

  // CLASSIC BURGERS
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    category: 'classicBurger',
    ingredients: [
      { id: 'beef-patty', name: 'Juicy Cheeseburger Patty (4oz)', image: '🥩' },
      { id: 'cheese', name: 'Melted American Cheese', image: '🧀' },
      { id: 'mayo', name: 'Mayo', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'red-onion', name: 'Red Onion', image: '🧅' },
      { id: 'glazed-bun', name: 'Glazed Bun', image: '🍞' },
    ],
    price: 6.49,
  },
  {
    id: 'mighty-cheeseburger',
    name: 'Mighty Cheeseburger',
    category: 'classicBurger',
    ingredients: [
      { id: 'beef-patty-1', name: 'Beef Patty (4oz)', image: '🥩' },
      { id: 'beef-patty-2', name: 'Beef Patty (4oz)', image: '🥩' },
      { id: 'cheese-1', name: 'Melted American Cheese', image: '🧀' },
      { id: 'cheese-2', name: 'Melted American Cheese', image: '🧀' },
      { id: 'mayo', name: 'Mayo', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'red-onion', name: 'Red Onion', image: '🧅' },
      { id: 'glazed-bun', name: 'Glazed Bun', image: '🍞' },
    ],
    price: 8.49,
  },

  // CHICKEN BURGERS
  {
    id: 'chicken-sando',
    name: 'Chicken Sando',
    category: 'chickenBurger',
    ingredients: [
      { id: 'fried-chicken', name: 'Crispy Buttermilk Fried Chicken', image: '🍗' },
      { id: 'comeback-sauce', name: 'Comeback Sauce', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'brioche-bun', name: 'Seeded Brioche Bun', image: '🍞' },
    ],
    price: 6.99,
  },
  {
    id: 'chicken-stacker',
    name: 'Chicken Stacker',
    category: 'chickenBurger',
    ingredients: [
      { id: 'fried-chicken', name: 'Crispy Buttermilk Fried Chicken', image: '🍗' },
      { id: 'hashbrown', name: 'Crispy Hashbrown', image: '🥔' },
      { id: 'cheese', name: 'Melted American Cheese', image: '🧀' },
      { id: 'comeback-sauce', name: 'Comeback Sauce', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'brioche-bun', name: 'Seeded Brioche Bun', image: '🍞' },
    ],
    price: 7.99,
  },
  {
    id: 'buffalo-tower',
    name: 'Buffalo Tower',
    category: 'chickenBurger',
    ingredients: [
      { id: 'fried-chicken', name: 'Crispy Buttermilk Fried Chicken', image: '🍗' },
      { id: 'bbq-sauce', name: 'House BBQ Sauce', image: '🥫' },
      { id: 'hashbrown', name: 'Crispy Hashbrown', image: '🥔' },
      { id: 'cheese', name: 'Melted American Cheese', image: '🧀' },
      { id: 'burger-sauce', name: 'Burger Sauce', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'glazed-bun', name: 'Glazed Bun', image: '🍞' },
    ],
    price: 7.49,
  },

  // SMASHED BURGERS
  {
    id: 'the-star',
    name: 'The Star',
    category: 'smashBurger',
    ingredients: [
      { id: 'patty-1', name: 'Smashed Patty', image: '🥩' },
      { id: 'patty-2', name: 'Smashed Patty', image: '🥩' },
      { id: 'cheese-1', name: 'Melted American Cheese', image: '🧀' },
      { id: 'cheese-2', name: 'Melted American Cheese', image: '🧀' },
      { id: 'mayo', name: 'Mayo', image: '🥫' },
      { id: 'red-onion', name: 'Red Onion', image: '🧅' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'brioche-bun', name: 'Brioche Bun', image: '🍞' },
    ],
    price: 7.49,
  },
  {
    id: 'crunchy-angus',
    name: 'Crunchy Angus',
    category: 'smashBurger',
    ingredients: [
      { id: 'patty-1', name: 'Smashed Patty', image: '🥩' },
      { id: 'patty-2', name: 'Smashed Patty', image: '🥩' },
      { id: 'crispy-shallot', name: 'Crispy Battered Shallot', image: '🧅' },
      { id: 'cheese-1', name: 'Melted American Cheese', image: '🧀' },
      { id: 'cheese-2', name: 'Melted American Cheese', image: '🧀' },
      { id: 'burger-sauce', name: 'Burger Sauce', image: '🥫' },
      { id: 'bbq-sauce', name: 'BBQ Sauce', image: '🥫' },
      { id: 'potato-bun', name: 'Potato Bun', image: '🍞' },
    ],
    price: 8.49,
  },
  {
    id: 'caramelised-gourmet',
    name: 'Caramelised Gourmet',
    category: 'smashBurger',
    ingredients: [
      { id: 'patty-1', name: 'Smashed Patty', image: '🥩' },
      { id: 'patty-2', name: 'Smashed Patty', image: '🥩' },
      { id: 'caramelised-onions', name: 'Sweet Caramelised Onions', image: '🧅' },
      { id: 'cheese-1', name: 'Melted American Cheese', image: '🧀' },
      { id: 'cheese-2', name: 'Melted American Cheese', image: '🧀' },
      { id: 'burger-sauce', name: 'Burger Sauce', image: '🥫' },
      { id: 'red-onion', name: 'Red Onion', image: '🧅' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'brioche-bun', name: 'Brioche Bun', image: '🍞' },
    ],
    price: 7.99,
  },

  // VEGGIE BURGERS
  {
    id: 'veggie-vurger',
    name: 'Veggie Vurger',
    category: 'veggieBurger',
    ingredients: [
      { id: 'veggie-patty', name: 'Deliciously Coated Veggie Patty', image: '🥗' },
      { id: 'sweet-chilli', name: 'Sweet Chilli', image: '🌶' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
      { id: 'red-onion', name: 'Red Onion', image: '🧅' },
      { id: 'brioche-bun', name: 'Seeded Brioche Bun', image: '🍞' },
    ],
    price: 6.99,
  },

  // WRAPS
  {
    id: 'chicken-supreme',
    name: 'Chicken Supreme',
    category: 'wrap',
    ingredients: [
      { id: 'tortilla', name: 'Tortilla Wrap', image: '🌯' },
      { id: 'crispy-chicken', name: 'Fresh Crispy Chicken', image: '🍗' },
      { id: 'comeback-sauce', name: 'Comeback Sauce', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
    ],
    price: 5.99,
  },
  {
    id: 'bbq-jerk-wrap',
    name: 'BBQ Jerk Wrap',
    category: 'wrap',
    ingredients: [
      { id: 'tortilla', name: 'Tortilla Wrap', image: '🌯' },
      { id: 'bbq-chicken', name: 'BBQ Glazed Crispy Chicken', image: '🍗' },
      { id: 'cheese', name: 'Grated Cheese', image: '🧀' },
      { id: 'comeback-sauce', name: 'Comeback Sauce', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
    ],
    price: 6.49,
  },

  // LOADED FRIES
  {
    id: 'chicken-loaded-fries',
    name: 'Chicken Loaded Fries',
    category: 'loadedFries',
    ingredients: [
      { id: 'fries-base', name: 'Choice of Regular/Curly Fries', image: '🍟' },
      { id: 'grilled-chicken', name: 'Diced Grilled Chicken', image: '🍗' },
      { id: 'cheese', name: 'Melting Cheddar Cheese', image: '🧀' },
      { id: 'garlic-mayo', name: 'Garlic Mayo', image: '🥫' },
      { id: 'lettuce', name: 'Lettuce', image: '🥬' },
    ],
    price: 6.99,
  },
  {
    id: 'donner-loaded-fries',
    name: 'Donner Loaded Fries',
    category: 'loadedFries',
    ingredients: [
      { id: 'fries-base', name: 'Choice of Regular/Curly Fries', image: '🍟' },
      { id: 'donner-meat', name: 'Sizzling Donner Meat', image: '🥩' },
      { id: 'garlic-mayo', name: 'Garlic Mayo', image: '🥫' },
      { id: 'lettuce', name: 'Iceberg Lettuce', image: '🥬' },
    ],
    price: 6.99,
  },
  {
    id: 'naga-loaded-fries',
    name: 'Naga Loaded Fries (VERY SPICY)',
    category: 'loadedFries',
    ingredients: [
      { id: 'curly-fries', name: 'Crispy Curly Fries', image: '🍟' },
      { id: 'naga-donner', name: 'Naga Donner Stir Fry', image: '🥩' },
      { id: 'garlic-mayo', name: 'Garlic Mayo', image: '🥫' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 7.49,
  },

  // WINGS
  {
    id: 'memphis-wings-6',
    name: 'Memphis BBQ Wings (6)',
    category: 'wings',
    ingredients: [
      { id: 'wings-6', name: '6 Wings', image: '🍗' },
      { id: 'memphis-sauce', name: 'Memphis BBQ Sauce', image: '🥫' },
      { id: 'sesame-seeds', name: 'Sesame Seeds', image: '🌱' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 4.99,
  },
  {
    id: 'peri-wings-6',
    name: 'Munchies Peri Wings (6)',
    category: 'wings',
    ingredients: [
      { id: 'wings-6', name: '6 Wings', image: '🍗' },
      { id: 'peri-sauce', name: 'Munchies Peri Sauce', image: '🥫' },
      { id: 'sesame-seeds', name: 'Sesame Seeds', image: '🌱' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 4.99,
  },
  {
    id: 'naga-wings-6',
    name: 'Naga Wings (6)',
    category: 'wings',
    ingredients: [
      { id: 'wings-6', name: '6 Wings', image: '🍗' },
      { id: 'naga-sauce', name: 'Naga Sauce', image: '🥫' },
      { id: 'sesame-seeds', name: 'Sesame Seeds', image: '🌱' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 4.99,
  },

  // TENDERS
  {
    id: 'original-tenders-3',
    name: 'Original Crispy Tenders (3)',
    category: 'tenders',
    ingredients: [
      { id: 'tenders-3', name: '3 Original Tenders', image: '🍗' },
      { id: 'sesame-seeds', name: 'Sesame Seeds', image: '🌱' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 4.99,
  },
  {
    id: 'all-stars-tenders-3',
    name: 'All Stars Tenders (3)',
    category: 'tenders',
    ingredients: [
      { id: 'tenders-3', name: '3 Tenders', image: '🍗' },
      { id: 'all-stars-sauce', name: 'All Stars Sauce', image: '🥫' },
      { id: 'sesame-seeds', name: 'Sesame Seeds', image: '🌱' },
      { id: 'spring-onions', name: 'Spring Onions', image: '🧅' },
    ],
    price: 4.99,
  },

  // SHAKES
  {
    id: 'legendary-ferrero',
    name: 'Legendary Ferrero',
    category: 'shake',
    ingredients: [
      { id: 'milk-base', name: 'Milk Base', image: '🥛' },
      { id: 'ferrero', name: 'Ferrero', image: '🍫' },
      { id: 'nutella', name: 'Nutella', image: '🍫' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 5.49,
  },
  {
    id: 'bueno-shake',
    name: 'Bueno',
    category: 'shake',
    ingredients: [
      { id: 'milk-base', name: 'Milk Base', image: '🥛' },
      { id: 'kinder-bueno', name: 'Kinder Bueno', image: '🍫' },
      { id: 'bueno-sauce', name: 'Bueno Sauce', image: '🍫' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 5.49,
  },
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff',
    category: 'shake',
    ingredients: [
      { id: 'milk-base', name: 'Milk Base', image: '🥛' },
      { id: 'lotus-spread', name: 'Lotus Spread', image: '🍪' },
      { id: 'biscoff-crumbs', name: 'Biscoff Crumbs', image: '🍪' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 5.49,
  },

  // ICED DRINKS
  {
    id: 'mocha-frappe',
    name: 'Mocha Frappe',
    category: 'icedDrink',
    ingredients: [
      { id: 'coffee-base', name: 'Coffee Base', image: '☕' },
      { id: 'chocolate', name: 'Chocolate', image: '🍫' },
      { id: 'ice', name: 'Ice', image: '🧊' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 4.49,
  },
  {
    id: 'caramel-frappe',
    name: 'Caramel Frappe',
    category: 'icedDrink',
    ingredients: [
      { id: 'coffee-base', name: 'Coffee Base', image: '☕' },
      { id: 'caramel', name: 'Caramel Syrup', image: '🍯' },
      { id: 'ice', name: 'Ice', image: '🧊' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 4.49,
  },
  {
    id: 'mango-frappe',
    name: 'Mango Frappe',
    category: 'icedDrink',
    ingredients: [
      { id: 'mango-base', name: 'Mango Base', image: '🥭' },
      { id: 'ice', name: 'Ice', image: '🧊' },
      { id: 'whipped-cream', name: 'Whipped Cream', image: '🥛' },
    ],
    price: 4.49,
  }
];
