const express = require("express")
const {createUser, login} = require('./controller/user')
const route = express.Router();

route.post('/register' , createUser);
route.get('/login' , login);


module.exports = route;