/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/

// re-commiting this with this method since it makes more sense to me
function calculateTotal(items) {
  const mappingVar = items.map((item) => {
    item.total = item.price * (1 - item.discount) * item.quantity
    item.total = item.total.toFixed(2)
    item.total = parseFloat(item.total)

    return item
  })

  return mappingVar
}

module.exports = calculateTotal

/* function calculateTotal(items) {
  items.map((item) => {
    item.total = parseInt(item.price * (1 - item.discount) * item.quantity * 100) / 100
  })

  return items
} */
