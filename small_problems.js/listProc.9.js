
let p = console.log
/* 
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.
*/



function transactionsFor (itemNumber, inventory) {
  let selectedItems = inventory.filter(obj => obj.id === itemNumber);
  return selectedItems;
}

function isItemAvailable (itemNumber, inventory) {
  let items = transactionsFor(itemNumber, inventory);
  let totalCount = items.reduce(calculateStock, 0);

  return totalCount > 0;
}

function calculateStock (acc, currentValue) {
  if(currentValue.movement === 'in') {
    acc += currentValue.quantity;
  } else {
    acc -= currentValue.quantity;
  }
  return acc; 
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


isItemAvailable(101, transactions);     // false// 5 + 12 = 17/ 17 - 18 < = 0
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true