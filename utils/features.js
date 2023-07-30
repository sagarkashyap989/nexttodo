import mongoose from "mongoose";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Todo13",
  });
  console.log(`Database Connected on ${connection.host}`);
};



export const cookieSetter = async (res, token, set) => {

  res.setHeader(
    "Set-Cookie",
    serialize('token',
      set ? token : '',
      {
        path: '/',
        httpOnly: true,
        maxAge: set ? 1000 * 60 * 60 * 24 * 15 : 0

      })
  )

}


export const generateToken = async (_id) => {
  return await jwt.sign({ _id }, process.env.JWT_SECRET)
}