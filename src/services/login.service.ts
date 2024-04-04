import { UsertModel } from '../models/UsersModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = async (email: string, password: string): Promise<string> => {
  const users = await UsertModel.find().exec();
  try {
    if (!(email && password)) {
      return 'All input is required';
    }
    const user = users.find(x => x.password === password);
    if (user && users.find(x => x.email === user.email)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY || '',
        {
          expiresIn: '2h'
        }
      );
      user.token = token;
      return 'token: ' + user.token;
    } else {
      return 'Invalid Credentials';
    }
  } catch (err) {
    console.log(err);
    return 'Error occurred during login';
  }
};

export const register = async (First_name: string, Last_name: string, Email: string, Password: string): Promise<string | any> => {
  const users = await UsertModel.find().exec();
  try {
    if (!(Email && Password && First_name && Last_name)) {
      return 'All input is required';
    }

    const oldUser = users.find(x => x.password === Password && x.email === Email);

    if (oldUser) {
      return 'User Already Exist. Please Login';
    }

    const encryptedPassword = await bcrypt.hash(Password, 10);

    const user = {
      First_name,
      Last_name,
      email: Email.toLowerCase(),
      password: encryptedPassword,
      token:""
    };

    const token = jwt.sign(
      { user_id: user.password, Email },
      process.env.TOKEN_KEY || '',
      {
        expiresIn: '2h'
      }
    );
    user.token = token;
    try {
      await UsertModel.insertMany({ first_name: First_name, last_name: Last_name, email: Email, password: Password, token });
    } catch (err) {
      console.error(err);
      return 'Error occurred during signup';
    }
    return user;
  } catch (err) {
    console.log(err);
    return 'Error occurred during signup';
  }
};
