
class Product {
  constructor({ code, name, categoryName, weight, quantity, entryDate, expirationDate, description }) {
    this.code = code;
    this.name = name;
    this.categoryName = categoryName;
    this.weight = weight;
    this.quantity = quantity;
    this.entryDate = new Date(entryDate).toISOString().substring(0, 10);
    this.expirationDate = expirationDate ? new Date(expirationDate).toISOString().substring(0, 10) : null;
    this.description = description;
  }
}

module.exports = Product;
