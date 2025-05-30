const express = require("express")
const {createToken,stkPush} = require ("../controller/mpesa")

const mpesaRouter = express.Router()
const app = express()
app.use(express.json());

mpesaRouter.post("/token",createToken,stkPush)

module.exports = mpesaRouter 