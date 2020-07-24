export default class Product {
  constructor(data) {
    this.price = data.price
    this.isExempt = data.isExempt
    this.isImported = data.isImported
  }

  taxes() {
    if (this.isExempt && !this.isImported) {
      return 0
    }

    if (this.isImported) {
      return this.price * 0.05
    }

    return this.price
  }
}
