import Cart from './cart'
import Product from './product'

function createProducts(productsText) {
  const productLineRegex = /(?<quantity>\d+)\s+(?<name>[\w|\s]+)\s+at\s+(?<price>\d\d?\.?\d?\d?)/gms
  const match = productLineRegex.exec(productsText)
  if (!match || !match.groups) {
    return null
  }

  const quantity = match.groups.quantity
  const name = match.groups.name
  const price = match.groups.price

  const products = []
  for (let i = 0; i < quantity; i++) {
    products.push(new Product({ name, price: parseFloat(price) }))
  }

  return products
}

function createCart(cartText) {
  const productLineRegex = /(?<quantity>\d+)\s+(?<name>[\w|\s]+)\s+at\s+(?<price>\d\d?\.?\d?\d?)/gm
  const match = cartText.match(productLineRegex)

  const products = match.map(line => createProducts(line)).flat()

  return new Cart({ products })
}

export { createCart }
