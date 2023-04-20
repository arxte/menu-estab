const { ObjectId, MongoUnexpectedServerResponseError } = require("mongodb");
const User = require("../models/user.js"); // импорт модели mongoose для создания пользователя
const crypto = require("crypto-js"); // покдлючение библиотеки для шифрования данных
// const cors = require("cors");

const keyForEncrypt = "secretkey"; // секретный ключ для шифрования данных
let userNumberAfterEncrypt = "";
let number = "";
let id = "";

exports.addUser = async function (req, res) {
  id = User._id;
  const userData = req.body;

  number = req.body.number;

  const candidat = await User.find({ number: number });
  console.log(candidat);

  if (candidat.length === 0) {
    console.log(candidat);
    const user = new User(userData); // создание пользователя
    // User.createIndex({ number: 1 }, { unique: true });

    await user.save();
    console.log(candidat);

    res.send(true);
  } else {
    res.send(false);
  }
};

exports.updateUserOrder = async function (req, res) {
  res.send("normalno");
  const order = req.body;

  console.log(order);

  await User.updateOne(
    { orders: Array, _id: id },
    { $push: { orders: order } }
  );
};

exports.getUsersOrder = async function (req, res) {
  number = req.body.number;
  console.log(req.body);
  console.log(User._id);
  // id = User._id;
  const currentUser = await User.findById(id);
  console.log(currentUser._id);
  console.log(currentUser.orders);
  // console.log(b);
  const ordersData = currentUser.orders;
  // console.log(ordersData);
  res.send(ordersData);
};

exports.getUserNumber = async function (req, res) {
  console.log(req.body._value);
  const getCurrentUser = await User.find({ number: req.body._value });
  // const getUser =
  console.log(getCurrentUser);
  if (
    getCurrentUser.length != 0 &&
    getCurrentUser[0].number === req.body._value
  ) {
    res.send(getCurrentUser[0].number);
    id = getCurrentUser[0]._id;
  } else {
    res.send(false);
  }
  console.log(id);
  // id = getCurrentUser._id;
};
