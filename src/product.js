const BASE_TAX_PERCENT = 0.1
const IMPORT_TAX_PERCENT = 0.05
const ROUNDING_INTERVAL = 0.05

class Product {
  constructor(data) {
    this.price = data.price
    this.isExempt = data.isExempt
    this.isImported = data.isImported
  }

  taxes() {
    let taxPercent = 0
    if (!this.isExempt) {
      taxPercent = taxPercent + BASE_TAX_PERCENT
    }

    if (this.isImported) {
      taxPercent = taxPercent + IMPORT_TAX_PERCENT
    }

    return roundToNearest(this.price * taxPercent)
  }
}

function roundToNearest(value, interval = ROUNDING_INTERVAL) {
  return Math.ceil((value - Number.EPSILON) / interval) * interval
}

export default Product
