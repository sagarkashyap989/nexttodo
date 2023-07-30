import { User } from "@/models/user";
import { connectDB } from "@/utils/features";
import bcrypt from 'bcrypt'
import {generateToken, cookieSetter}  from '@/utils/features'
const { asyncError, errorHandler } = require("@/middleware/error");



 const login = asyncError(
    async (req, res) => {
         
 
       cookieSetter(res,null, false);



       return res.status(200).json({
        success:true,
        msg:`user logged out successfully`
       })

    }
)


export default login