function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
};

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice([i],1);
    }
  }
};

function listItems(deliveryOrders) {
  //build array of items
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
      items.push(deliveryOrders[i].item);
  }
  // merge strings in array
  return items.join(', ');
  // return string of items
};

function searchOrder(deliveryOrders, itemName) {
  //create for loop to run through orders
  for (var i = 0; i < deliveryOrders.length; i++) {
    //determine if order exists
    if (deliveryOrders[i].item === itemName) {
      return true;
    }
  }
  // item not found in loop, return false
  return false;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
