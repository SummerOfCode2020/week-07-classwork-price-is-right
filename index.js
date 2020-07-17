/** 
    Do work here! 
    Use the price, the quantity and the discount to build your calculation

    Calculating the subtotal of each item. This exercise will be completed in class.
    Create a new branch named answer to do your work in
    Run npm install to have all dependencies installed and then run npm test to see the failing tests
    Use what you have learned about functional programming to implement the calculateSubTotals() function to make the tests pass
    Commit your changes, push your branch up to GitHub, and create a pull request
    Request review from the instructor on your PR

*/

// module.exports = {
//     calculateSubTotals: function (items) {
//     switch (items.name) {
//         case 'iPhone Charger':
//             total = items.price * (1- items.discount) * items.quantity;
//             break;
//         case 'Video Adapter':
//             total = items.price * (1 - items.discount) * items.quantity;
//             break;  
//         default:
//             total = 0;
//     }

//     return result
// }

function calculateTotal(items) {
  items.map((item) => {
    item.total = parseInt(item.price * (1 - item.discount) * item.quantity * 100) / 100
  })

  return items
}
module.exports = calculateTotal
