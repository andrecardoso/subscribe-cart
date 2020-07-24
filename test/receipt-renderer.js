import assert from 'assert'

import { createCart } from '../src/cart-parser'
import { renderReceipt } from '../src/receipt-renderer'

describe('ReceiptRenderer', () => {
  it('should render receipt with a single product', () => {
    const cartText = `1 music CD at 14.99`

    const cart = createCart(cartText)

    const expectedReceipt = `1 music CD: 14.99\nSales Taxes: 1.50\nTotal: 16.49`

    assert.equal(expectedReceipt, renderReceipt(cart))
  })

  it('should create cart with two items of a single product', () => {
    const cartText = `2 music CD at 14.99`

    const cart = createCart(cartText)

    const expectedReceipt = `2 music CD: 29.98\nSales Taxes: 3.00\nTotal: 32.98`

    assert.equal(expectedReceipt, renderReceipt(cart))
  })
})
