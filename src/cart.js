export default class Cart {
  constructor(data) {
    this._products = data.products || []
  }

  taxes() {
    return this._products.reduce((total, p) => total + p.taxes(), 0)
  }
}
