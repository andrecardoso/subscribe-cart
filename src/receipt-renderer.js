function renderProducts(products) {
  const items = products.reduce((result, p) => {
    const item = result[p.name]
    if (!item) {
      return { [p.name]: { quantity: 1, price: p.price.toFixed(2) } }
    }
    item.quantity = item.quantity + 1
    return result
  }, {})

  return Object.entries(items).reduce(
    (result, [name, item]) =>
      `${result ? '\n' : ''}${item.quantity} ${name}: ${
        item.quantity * item.price
      }`,
    ''
  )
}

function renderReceipt(cart) {
  const taxes = `Sales Taxes: ${cart.taxes().toFixed(2)}`
  const total = `Total: ${cart.total().toFixed(2)}`
  return `${renderProducts(cart.products)}\n${taxes}\n${total}`
}

export { renderReceipt }
