class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCartItems() {
      return this.items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        totalPrice: item.calculateTotalPrice()
      }));
    }
  }
  
  const product1 = new Product(1, 'Product 1', 10);
  const product2 = new Product(2, 'Product 2', 20);
  const product3 = new Product(3, 'Product 3', 30);
  
  const cart = new ShoppingCart();
  
  cart.addItem(product1, 2);
  cart.addItem(product2, 1);
  cart.addItem(product3, 5);
  cart.addItem(product1, 3); 
  
  console.log(cart.displayCartItems());
  
  cart.removeItem(2);
  
  console.log(cart.displayCartItems());
  