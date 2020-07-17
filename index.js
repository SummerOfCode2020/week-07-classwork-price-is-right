/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/
function calculateTotal(inputArray) {
  return inputArray.map(calculateIndividualTotal)
}


function calculateIndividualTotal(individualItem) {
  let calculatedTotal = individualItem.price * (1 - individualItem.discount) * individualItem.quantity

  individualItem.total = parseInt(calculatedTotal * 100) / 100

  return individualItem
}

module.exports = calculateTotal
