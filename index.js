/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/

function calculateTotal (items) {
  return items.map(function (item) {
    let newTotal = item.price * (1 - item.discount) * item.quantity

    item.total = parseInt(newTotal * 100) / 100

    return item
  })
}

module.exports = calculateTotal
