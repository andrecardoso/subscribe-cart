import assert from 'assert'

import { createProduct } from '../src/product-data'

describe('Product Data', () => {
  it('should create imported product', () => {
    const product = createProduct({ name: 'imported computer', price: '3000' })

    assert.equal(false, product.isExempt)
    assert.equal(true, product.isImported)
    assert.equal('imported computer', product.name)
    assert.equal(3000, product.price)
  })

  it('should create book product', () => {
    const product = createProduct({ name: 'book', price: '32.99' })

    assert.equal(true, product.isExempt)
    assert.equal(false, product.isImported)
    assert.equal('book', product.name)
    assert.equal(32.99, product.price)
  })

  it('should create food product', () => {
    const product = createProduct({
      name: 'box of imported chocolates',
      price: '23.99'
    })

    assert.equal(true, product.isExempt)
    assert.equal(true, product.isImported)
    assert.equal('box of imported chocolates', product.name)
    assert.equal(23.99, product.price)
  })

  it('should create medical product', () => {
    const product = createProduct({
      name: 'packet of headache pills',
      price: '9.75'
    })

    assert.equal(true, product.isExempt)
    assert.equal(false, product.isImported)
    assert.equal('packet of headache pills', product.name)
    assert.equal(9.75, product.price)
  })

  it('should create regular product', () => {
    const product = createProduct({ name: 'music CD', price: '2.99' })

    assert.equal(false, product.isExempt)
    assert.equal(false, product.isImported)
    assert.equal('music CD', product.name)
    assert.equal(2.99, product.price)
  })
})
