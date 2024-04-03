const { Router } = require('express');
const app = Router();
const usersService = require('../services/users.service');


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const login = await usersService.login(email, password);
  res.send(login)
});

app.post("/signUp", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const signUp = await usersService.signUp(first_name, last_name, email, password);
  res.send(signUp)
});




module.exports = app;