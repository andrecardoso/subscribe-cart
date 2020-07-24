import { createCart } from './cart-parser.js'
import { renderReceipt } from './receipt-renderer.js'

function calculate(inputText) {
  return renderReceipt(createCart(inputText))
}

export { calculate }
