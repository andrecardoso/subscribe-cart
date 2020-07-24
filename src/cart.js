export default class Cart {
  constructor(data) {
    this._products = data.products || []
  }

  get numberOfProducts() {
    return this._products.length
  }

  taxes() {
    return this._products.reduce((total, p) => total + p.taxes(), 0)
  }

  total() {
    const totalPrice = this._products.reduce((total, p) => total + p.price, 0)
    return totalPrice + this.taxes()
  }

  get items() {
    return this._products.reduce((result, p) => {
      const item = result[p.name]
      if (!item) {
        return { [p.name]: { quantity: 1, price: p.price.toFixed(2) } }
      }
      item.quantity = item.quantity + 1
      return result
    }, {})
  }
}
