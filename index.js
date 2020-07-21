/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/
function calculateTotal(items) {
  const newArray = items.map((item) => {
    item.total = (item.price * item.quantity) * (1 - item.discount)
    item.total = item.total.toFixed(2)
    item.total = parseFloat(item.total)

    return item
  })

  return newArray
}

module.exports = calculateTotal
