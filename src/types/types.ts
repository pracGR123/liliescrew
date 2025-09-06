export interface Ingredient {
  id: string;
  name: string;
  image: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: 'boxMeal' | 'classicBurger' | 'chickenBurger' | 'veggieBurger' | 'smashBurger' | 
            'wrap' | 'loadedFries' | 'sides' | 'wings' | 'tenders' | 'shake' | 'icedDrink' | 'kids' | 'drink';
  ingredients: Ingredient[];
  price: number;
}

export interface CustomerOrder {
  id: string;
  baseRecipe: Recipe;
  modifications: {
    remove: string[];
    add: string[];
  };
  timeLimit: number;
}

export interface GameState {
  score: number;
  currentOrder: CustomerOrder | null;
  timeRemaining: number;
  isGameOver: boolean;
}
