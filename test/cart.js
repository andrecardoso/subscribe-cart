import assert from 'assert'

import Product from '../src/cart'
import Cart from '../src/cart'

describe('Cart', () => {
  describe('#taxes()', () => {
    it('should return 0 when all products are exempt', () => {
      const chocolate = new Product({ price: 9.99, isExempt: true })
      const bananas = new Product({ price: 1.99, isExempt: true })
      const pie = new Product({ price: 5.99, isExempt: true })

      const cart = new Cart({ products: [chocolate, bananas, pie] })

      assert.equal(0, cart.taxes())
    })
  })
})
