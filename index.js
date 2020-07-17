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
// const items = {
//   id: 1,
//   name: 'iPhone Charger',
//   price: 19.95,
//   discount: .12,
//   quantity: 2,
//   total: 0
// }

// console.log(calculateTotal(items))
// , {
//     id: 2,
//     name: 'Video Adapter',
//     price: 12.95,
//     discount: .10,
//     quantity: 1,
//     total: 0
//   }]

//   // setup the "expectation" to be a variable for readability
//   // Note the `total` property has been added as an expectation for each `item` object 
//   const expected = [{
//     id: 1,
//     name: 'iPhone Charger',
//     price: 19.95,
//     discount: .12,
//     quantity: 2,
//     total: 35.11
//   }, {
//     id: 2,
//     name: 'Video Adapter',
//     price: 12.95,
//     discount: .10,
//     quantity: 1,
//     total: 11.65
//   }]
