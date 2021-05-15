function nameMenuItem(menuItem) {
  return "Delicious " + menuItem;
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
};

function addIngredients(ingredient, ingredients) {
  //create a for loop for ingredients array
  for (var i = 0; i < ingredients.length; i++) {
    //if any of the ingredients indecies exists already
    if (ingredients[i] === ingredient) {
      // dont add ingredient
      return
    }
  }
  ingredients.push(ingredient);
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  return price * .9;
};

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
};
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
