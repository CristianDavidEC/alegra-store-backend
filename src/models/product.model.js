
class Product {
  constructor({ code, name, categoryName, weight, quantity, entryDate, expirationDate, description, salePrice, purchasePrice }) {
    this.code = code;
    this.name = name;
    this.categoryName = categoryName;
    this.weight = weight;
    this.quantity = quantity;
    this.entryDate = new Date(entryDate).toISOString().substring(0, 10);
    this.expirationDate = expirationDate ? new Date(expirationDate).toISOString().substring(0, 10) : null;
    this.description = description;
    this.salePrice=salePrice;
    this.purchasePrice=purchasePrice;
  }
}

module.exports = Product;
