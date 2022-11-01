import { IUser, User } from '../models/user.model';
import { DocumentDefinition } from "mongoose";
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export async function register(user: DocumentDefinition<IUser>) {
  try {
    await User.create(user)
  } catch (err) {
    throw err
  }
}

export async function login(email: string, password: string) {
  try {
    const foundUser = await User.findOne({ email })

    if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
      throw new Error('These credentials do not match our records.')
    }

    const token = jwt.sign({ _id: foundUser._id.toString(), email: foundUser.email }, String(process.env.SECRET_KEY))

    return {
      user: {
        _id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      },
      token
    }
  } catch (err) {
    throw err
  }
}