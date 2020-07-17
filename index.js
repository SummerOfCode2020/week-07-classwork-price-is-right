/** Your task is to implement a `calculateTotal` function which 
 * returns a new list of items using `map`. Each item will have a copy 
 * of the previous item's properties and will additionally have a new 
 * property named `total`. The value of `total` must be equal to the total 
 * price of that item given the quantity, price and discount. This exercise 
 * will be completed in class.
    Do work here! 
    Use the price, the quantity and the discount to build your calculation
*/
function calculateTotal (items) {
    const mappingVar = items.map((item) => {
        item.total = (item.price * item.quantity) * (1 - item.discount)
        item.total = item.total.toFixed(2)
        item.total = parseFloat(item.total)

        return item

    })

    return mappingVar
}

module.exports = calculateTotal