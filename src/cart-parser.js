import Cart from './cart.js'
import { createProduct } from './product-data.js'

function createProducts(productsText) {
  const productLineRegex = /(?<quantity>\d+)\s+(?<name>[\w|\s]+)\s+at\s+(?<price>\d\d?\.?\d?\d?)/gms
  const match = productLineRegex.exec(productsText)
  if (!match || !match.groups) {
    return null
  }

  const { quantity, name, price } = match.groups

  const products = []
  for (let i = 0; i < quantity; i++) {
    products.push(createProduct({ name, price }))
  }

  return products
}

function createCart(cartText) {
  const productLineRegex = /(\d+)\s+([\w|\s]+)\s+at\s+(\d\d?\.?\d?\d?)/gm
  const match = cartText.match(productLineRegex)

  const products = match.map(line => createProducts(line)).flat()

  return new Cart({ products })
}

export { createCart }
