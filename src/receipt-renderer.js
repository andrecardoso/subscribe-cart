function renderItems(items) {
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
  return `${renderItems(cart.items)}\n${taxes}\n${total}`
}

export { renderReceipt }
