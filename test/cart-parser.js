import assert from 'assert'

import Cart from '../src/cart'
import { createCart } from '../src/cart-parser'

describe('CartParser', () => {
  it('should create cart instance', () => {
    const cartText = `1 music CD at 14.99`

    const cart = createCart(cartText)

    assert.equal(true, cart instanceof Cart)
  })

  it('should create cart with a single product', () => {
    const cartText = `1 music CD at 14.99`

    const cart = createCart(cartText)

    assert.equal(1, cart.numberOfProducts)
  })

  it('should create cart with two items of a single product', () => {
    const cartText = `2 music CD at 14.99`

    const cart = createCart(cartText)

    assert.equal(2, cart.numberOfProducts)
  })

  it('should create cart with multiple items of different products', () => {
    const cartText = `
    1 imported bottle of perfume at 27.99
    1 bottle of perfume at 18.99
    1 packet of headache pills at 9.75
    3 imported boxes of chocolates at 11.25`

    const cart = createCart(cartText)

    assert.equal(6, cart.numberOfProducts)
  })
})
