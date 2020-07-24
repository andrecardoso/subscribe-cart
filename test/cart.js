import assert from 'assert'

import Product from '../src/product'
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

    it('should return sum of product taxes when all products are not imported', () => {
      const book = new Product({ price: 12.49, isExempt: true })
      const cd = new Product({ price: 14.99 })
      const chocolate = new Product({ price: 0.85, isExempt: true })

      const cart = new Cart({ products: [book, book, cd, chocolate] })

      assert.equal(1.5, cart.taxes())
    })

    it('should return sum of product taxes when all products are imported', () => {
      const chocolate = new Product({
        price: 10.0,
        isExempt: true,
        isImported: true
      })
      const perfume = new Product({
        price: 47.5,
        isExempt: false,
        isImported: true
      })

      const cart = new Cart({ products: [chocolate, perfume] })

      assert.equal(7.65, cart.taxes())
    })

    it('should return sum of product taxes when products are imported or exempt', () => {
      const perfume = new Product({
        price: 18.99,
        isImported: false,
        isExempt: false
      })

      const importedPerfume = new Product({
        price: 27.99,
        isImported: true,
        isExempt: false
      })

      const headachePills = new Product({
        price: 9.75,
        isImported: false,
        isExempt: true
      })

      const importedChocolate = new Product({
        price: 11.25,
        isImported: true,
        isExempt: true
      })

      const products = [
        importedPerfume,
        perfume,
        headachePills,
        importedChocolate,
        importedChocolate,
        importedChocolate
      ]

      const cart = new Cart({ products })

      assert.equal(7.9, cart.taxes())
    })
  })
})
