function renderProducts(products) {
  return products.reduce(
    (result, p) => `${result ? '\n' : ''}1 ${p.name}: ${p.price.toFixed(2)}`,
    ''
  )
}

function renderReceipt(cart) {
  const taxes = `Sales Taxes: ${cart.taxes().toFixed(2)}`
  const total = `Total: ${cart.total().toFixed(2)}`
  return `${renderProducts(cart.products)}\n${taxes}\n${total}`
}

export { renderReceipt }
