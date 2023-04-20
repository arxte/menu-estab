const express = require("express"); // подключение фреймворка node.js для упрощения работы с ним
const helmet = require("helmet"); // подключение библиотеки для добавления доп.заголовков, которая защищает http запросы
const bodyParser = require("body-parser"); // подключение библиотека, которая парсит тело ответа
const mongoose = require("mongoose"); // подключение  библиотеки для упрощения работы с MongoDB
const cors = require("cors"); // подключение билиотека, которая передает данные по защищенномму соединению
const userRouter = require("./routes/userRouter.js"); // подключение роутов 

const app = express(); 

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.post("/register", userRouter);
app.post("/menu", userRouter)
app.post("/getOrders", userRouter);
app.post("/getUserNumber", userRouter)
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/users"); // подключение к базе данных
    app.listen(3000); // прослушивание сервера
  } catch (err) {
    console.log(err);
  }
}

main();

// app.get("/", (req, res) => {
//   res.send(userData);
// });
