import assert from 'assert'

import Product from '../src/product'

describe('Product', () => {
  describe('#taxes()', () => {
    it('should return 0 when product is exempt', () => {
      const chocolate = new Product({ price: 9.99, isExempt: true })

      assert.equal(0, chocolate.taxes())
    })

    it('should return imported tax when product is exempt and imported', () => {
      const importedChocolate = new Product({
        price: 10.0,
        isExempt: true,
        isImported: true
      })

      assert.equal(0.5, importedChocolate.taxes())
    })
  })
})
