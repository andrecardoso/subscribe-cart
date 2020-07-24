import Product from './product.js'

const exemptKeywords = ['book', 'pills', 'chocolate']

function createProduct({ name, price }) {
  const isImported = name.includes('import')

  const isExempt = exemptKeywords.some(word => name.includes(word))

  return new Product({ name, price: parseFloat(price), isImported, isExempt })
}

export { createProduct }
