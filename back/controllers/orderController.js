const { ObjectId } = require("mongodb");
const Order = require("../models/order.js"); // импорт модели mongoose для создания пользователя
const user = require("../models/user.js");
// const cors = require("cors");

exports.addOrderInOrdersList = async function (req, res) {
  res.send("Добавление заказа");
  const orderData = req.body;

  console.log(orderData);

  const order = new Order(orderData); // создание пользователя

  await order.save(); // сохранение пользователя в бд MongoDB
};
