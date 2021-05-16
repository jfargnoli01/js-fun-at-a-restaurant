function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner:[]
    }
  };
};
function addMenuItem(restaurant, menuItem) {
  for (var i = 0; i < restaurant.menus[menuItem.type].length; i++) {
    //runs through loop and not there, add item
    //runs through loop is there,
    if (restaurant.menus[menuItem.type][i] === menuItem) {
      // do not add item
      return
    }
  }
  restaurant.menus[menuItem.type].push(menuItem);
};

function removeMenuItem(restaurant, menuItemName, menuItemType) {
  // Will use restaurant parameter to find menu type and remove menu item
  // Can you find out which menu items (array) by menuItemType?
  // Find matching menu item in menu type => Use menuItemName parameter
  for (var i = 0; i < restaurant.menus[menuItemType].length; i++) {
    if (menuItemName === restaurant.menus[menuItemType][i].name) {
      // Remove that menu item from the menu type
      restaurant.menus[menuItemType].splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  // Build and return a string with menuItemName and menuItemType parameters

};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
