import assert from 'assert'

import { createCart } from '../src/cart-parser'
import { renderReceipt } from '../src/receipt-renderer'

describe('ReceiptRenderer', () => {
  it('should render receipt with a single product', () => {
    const cartText = `1 music CD at 14.99`

    const cart = createCart(cartText)

    const expectedReceipt = `1 music CD: 16.49\nSales Taxes: 1.50\nTotal: 16.49`

    assert.equal(expectedReceipt, renderReceipt(cart))
  })

  it('should create cart with two items of a single product', () => {
    const cartText = `2 music CD at 14.99`

    const cart = createCart(cartText)

    const expectedReceipt = `2 music CD: 32.98\nSales Taxes: 3.00\nTotal: 32.98`

    assert.equal(expectedReceipt, renderReceipt(cart))
  })

  it('should render cart with multiple items of different products', () => {
    const cartText = `
    1 imported bottle of perfume at 27.99
    1 bottle of perfume at 18.99
    1 packet of headache pills at 9.75
    3 imported boxes of chocolates at 11.25`

    const cart = createCart(cartText)

    const expectedReceipt = `1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
3 imported boxes of chocolates: 35.55
Sales Taxes: 7.90
Total: 98.38`

    assert.equal(expectedReceipt, renderReceipt(cart))
  })
})
