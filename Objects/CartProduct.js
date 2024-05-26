export class CartProduct {
  id;
  title;
  price;
  description;
  category;
  image;
  quantity;
  paid;

  constructor(product, quantity = 1, paid = false) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.category = product.category;
    this.image = product.image;
    this.quantity = quantity;
    this.paid = paid;
  }
}