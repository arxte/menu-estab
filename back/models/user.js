const mongoose = require("mongoose"); // подключение  библиотеки для упрощения работы с MongoDB
// const cors = require("cors");

const Schema = mongoose.Schema;

// создание схемы mongoose для создания пользователя
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  number: String,
  orders: Array,
});

module.exports = mongoose.model("User", userSchema); // экспорт модели схемы пользователя
