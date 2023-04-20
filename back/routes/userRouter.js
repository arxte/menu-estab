const express = require("express");
const userController = require("../controllers/userController.js");
const orderController = require("../controllers/orderController.js");

const userRouter = express.Router(); // мудуль роутов

userRouter.use("/register", userController.addUser);  // по определенному роуту использовать определенный контроллер
// userRouter.use("/userInfo", userController.getUsers); // по определенному роуту использовать определенный контроллер

userRouter.use("/menu", userController.updateUserOrder)

userRouter.use("/getOrders", userController.getUsersOrder)

userRouter.use("/getUserNumber", userController.getUserNumber)

module.exports = userRouter; // экспорт роутов
