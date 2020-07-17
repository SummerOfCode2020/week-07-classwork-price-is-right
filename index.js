function calculateTotal (items) {
    const mappingVar = items.map((item) => {
       item.total = (item.price * item.quantity) * (1 - item.discount)
       item.total = parseFloat(item.total.toFixed(2))
       // multiply quantity * price
       return item
    })
    console.log(mappingVar)

    return mappingVar
    
}

module.exports = calculateTotal

