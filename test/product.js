import assert from 'assert'

import Product from '../src/product'

describe('Product', () => {
  describe('#taxes()', () => {
    it('should return 0 when product is exempt', () => {
      const chocolate = new Product({ price: 9.99, isExempt: true })

      assert.equal(0, chocolate.taxes())
    })
  })
})
