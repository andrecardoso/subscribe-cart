export default class Cart {
  constructor(data) {
    this._products = data.products || []
  }

  taxes() {
    return 0
  }
}
