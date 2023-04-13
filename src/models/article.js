class Article {
  constructor({ id, ItemCode, ItemName, TypeItem, Quantity, Price, CreateDate }) {
    this.id = id;
    this.itemCode = ItemCode;
    this.itemName = ItemName;
    this.typeItem = TypeItem;
    this.quantity = Quantity;
    this.price = Price;
      
    this.createDate = new Date(CreateDate).toISOString().substring(0, 10);

  }

}

module.exports = Article;

  