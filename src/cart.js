export default class Cart {
  constructor(data) {
    this._products = data.products || []
  }

  taxes() {
    return this._products.reduce((total, p) => total + p.taxes(), 0)
  }

  total() {
    const totalPrice = this._products.reduce((total, p) => total + p.price, 0)
    return totalPrice + this.taxes()
  }
}
