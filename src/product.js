const BASE_TAX_PERCENT = 0.1
const IMPORT_TAX_PERCENT = 0.05
const ROUNDING_INTERVAL = 0.05

class Product {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.isExempt = data.isExempt
    this.isImported = data.isImported
  }

  taxes() {
    let taxPercent = this.isExempt ? 0 : BASE_TAX_PERCENT

    if (this.isImported) {
      taxPercent = taxPercent + IMPORT_TAX_PERCENT
    }

    return roundToNearest(this.price * taxPercent)
  }
}

function roundToNearest(value, interval = ROUNDING_INTERVAL) {
  // Use Number.EPSILON to avoid rounding errors due to the language floating point representation. See: https://2ality.com/2015/04/numbers-math-es6.html#number.epsilon
  return Math.ceil((value - Number.EPSILON) / interval) * interval
}

export default Product
