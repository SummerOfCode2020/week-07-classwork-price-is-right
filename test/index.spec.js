const expect = require('chai').expect
const calculateTotal = require('../index')

describe('Checkout', () => {
  it('calculates the total', () => {
    // given this test data
    const items = [{
      id: 1,
      name: 'iPhone Charger',
      price: 19.95,
      discount: .12,
      quantity: 2,
      total: 0
    }, {
      id: 2,
      name: 'Video Adapter',
      price: 12.95,
      discount: .10,
      quantity: 1,
      total: 0
    }]

    // setup the "expectation" to be a variable for readability
    // Note the `total` property has been added as an expectation for each `item` object 
    const expected = [{
      id: 1,
      name: 'iPhone Charger',
      price: 19.95,
      discount: .12,
      quantity: 2,
      total: 35.11
    }, {
      id: 2,
      name: 'Video Adapter',
      price: 12.95,
      discount: .10,
      quantity: 1,
      total: 11.65
    }]

    expect(calculateTotal(items)).to.deep.equal(expected)
  })
})
