export class Order {
  id;
  date; 
  status; 
  cartProducts;
  
  constructor(id, date, status, cartProducts) {
    this.id = id;
    this.date = date;
    this.status = status;
    this.cartProducts = cartProducts; // Array de CartProduct
  }
}
