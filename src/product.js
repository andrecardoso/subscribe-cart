export default class Product {
  constructor(data) {
    this.price = data.price
    this.isExempt = data.isExempt
    this.isImported = data.isImported
  }

  taxes() {
    if (this.isExempt) {
      return 0
    }
    return this.price
  }
}
