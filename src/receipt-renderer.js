function renderItems(items) {
  return Object.entries(items).reduce((text, [name, item]) => {
    const total = (item.quantity * item.price).toFixed(2)
    return `${text ? `${text}\n` : ''}${item.quantity} ${name}: ${total}`
  }, '')
}

function renderReceipt(cart) {
  const taxes = `Sales Taxes: ${cart.taxes().toFixed(2)}`
  const total = `Total: ${cart.total().toFixed(2)}`
  return `${renderItems(cart.items)}\n${taxes}\n${total}`
}

export { renderReceipt }
