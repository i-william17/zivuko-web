const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mpesaRouter = require("./routes/mpesaRoute")

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8000" , "http://localhost:4000" ],
  credentials: true
}));

app.use(express.json({ limit: "10000mb" }));
app.use(express.urlencoded({ extended: true, limit: "10000mb" }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello world!");
});


// config
if (process.env.NODE_ENV !== "PRODUCTION") { 
  require("dotenv").config({ path: "backend/config/config.env" });
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes 
const user = require("./controller/user");
const shop = require("./controller/shop"); 
const product = require("./controller/product");
const event = require("./controller/event"); 
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");


// use routes
app.use("/api/v2/mpesa", mpesaRouter);
app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
