import Recipes from './SpoonacularAPI/catagorys/Recipes.js';

const recipes = new Recipes();

recipes.findByNutrients(
  {
    minCarbs: 10,
    minProtein: 10,
  },
  (res) => {
    console.log(res);
  }
);
