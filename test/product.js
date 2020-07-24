import assert from 'assert'

import Product from '../src/product'

describe('Product', () => {
  describe('#taxes()', () => {
    it('should return base tax when product is neither exempt or imported', () => {
      const chocolate = new Product({ price: 9.99 })

      assert.equal(1, chocolate.taxes())
    })

    it('should return 0 when product is exempt', () => {
      const chocolate = new Product({ price: 9.99, isExempt: true })

      assert.equal(0, chocolate.taxes())
    })

    it('should return import tax when product is exempt and imported', () => {
      const importedChocolate = new Product({
        price: 10.0,
        isExempt: true,
        isImported: true
      })

      assert.equal(0.5, importedChocolate.taxes())
    })

    it('should return base and import tax when product is not exempt and imported', () => {
      const importedPerfume = new Product({
        price: 10.0,
        isExempt: false,
        isImported: true
      })

      assert.equal(1.5, importedPerfume.taxes())
    })
  })
})
