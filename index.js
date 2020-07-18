/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/
calculateTotal = inputArray => inputArray.map(calculateIndividualTotal)

calculateIndividualTotal = items => {
    items.total = parseInt((items.price * (1 - items.discount) * items.quantity) * 100) / 100

    return items
}
module.exports = calculateTotal
