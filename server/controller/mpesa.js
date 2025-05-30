const axios = require("axios")
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

console.log(process.env.KEY)

let token;

const createToken = async (req, res, next) => {
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const secret = process.env.CONSUMER_SECRET;
    const consumer = process.env.CONSUMER_KEY;
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
    await axios
      .get( 
        url,
        {
          headers: {
            authorization: `Basic ${auth}`,
          },
        }
      )
      .then((data) => {
        token = data.data.access_token;
        console.log(data.data);
        next();
      })
      .catch((err) => {
        console.log(err);
        res.json(err.message);
      });
  };

  const stkPush = async (req,res) => {
    console.log('Request body:', req.body); // Add this line to log the request body

  const shortCode = 174379;
  const phone = req.body.phone ? req.body.phone.substring(1) : ''; // Check if phone is defined
  const amount = req.body.amount;
  const passkey = process.env.PASSKEY;
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";


    const date = new Date();
    const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);
    const password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");

  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: 174379,
    PhoneNumber: `254${phone}`, 
    CallBackURL: "https://mydomain.com/path",
    AccountReference: "ONLINE SHOP 001",
    TransactionDesc: "Testing stk push", 
  };

  await axios
  .post(url, data, {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })
  .then((data) => {
    console.log(data);
    res.status(200).json(data.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err.message);
  });
  
};

module.exports = {createToken, stkPush}

