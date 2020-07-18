/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/

function calculateTotal(items) {
    return items.map(calculateItemTotal)
}

function calculateItemTotal(item) {
    const total = item.price * (1 - item.discount) * item.quantity

    item.total = parseInt(total * 100) / 100

    return item
}

module.exports = calculateTotal