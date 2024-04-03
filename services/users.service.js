const { UsertModel } = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs');


const login= async (email, password)=>{
    const users = await UsertModel.find().exec();
    try {
        if (!(email && password)) {
            return "All input is required";
        }
        const user = users.find(x => x.password == password);
        if (user && (users.find(x => x.email == user.email))) {
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          user.token = token;
        
          return "token: " + user.token
        }
        else
            return "Invalid Credentials"+ users;
      } catch (err) {
        console.log(err)
      }
}

const signUp = async ( First_name, Last_name, Email, Password)=>{
  const users = await UsertModel.find().exec();
  try {
    if (!(Email && Password && First_name && Last_name)) {
      res.status(400).send("All input is required");
    }

    const oldUser =  users.find(x => x.password == Password && x.email==Email);

    if (oldUser) {
      return "User Already Exist. Please Login";
    }
    encryptedPassword = await bcrypt.hash(Password, 10);

    const user = ({
      First_name,
      Last_name,
      email: Email.toLowerCase(),
      password: encryptedPassword,
    });
    
    const token = jwt.sign(
      { user_id: user._id, Email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    try {
    await UsertModel.insertMany({ first_name: First_name, last_name: Last_name,email: Email, password: Password , token: token});
  } catch (err) {
      console.error(err);
  }
    // return new user
    // res.status(201).json(user);
    return user
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
    login,
    signUp
}