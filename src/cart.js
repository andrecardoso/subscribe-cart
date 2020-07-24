export default class Cart {
  constructor(data) {
    this.products = data.products || []
  }

  get numberOfProducts() {
    return this.products.length
  }

  taxes() {
    return this.products.reduce((total, p) => total + p.taxes(), 0)
  }

  total() {
    const totalPrice = this.products.reduce((total, p) => total + p.price, 0)
    return totalPrice + this.taxes()
  }
}
