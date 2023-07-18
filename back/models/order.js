const mongoose = require("mongoose"); // подключение  библиотеки для упрощения работы с MongoDB
// const cors = require("cors");

const Schema = mongoose.Schema;

// создание схемы mongoose для создания заказа
const orderSchema = new Schema({
  nameList: String,
  status: String,
  price: Number,
});

module.exports = mongoose.model("Order", orderSchema); // экспорт модели схемы заказа