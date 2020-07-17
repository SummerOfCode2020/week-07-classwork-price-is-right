/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/

function calculateTotal(items) {
  items.map((item) => {
    item.total = parseInt(item.price * (1 - item.discount) * item.quantity * 100) / 100
  })

  return items
}

module.exports = calculateTotal

