import { User } from "@/models/user";
import { connectDB } from "@/utils/features";
import bcrypt from 'bcrypt'
import {generateToken, cookieSetter}  from '@/utils/features'
const { asyncError, errorHandler } = require("@/middleware/error");



 const login = asyncError(
    async (req, res) => {
        console.log('login')
        const { email, password } = req.body;
        if (!email || !password) return errorHandler(res, 500, 'please provide all the fields')

        await connectDB();

        const user = await User.findOne({email}).select("+password");

        if(!user) return errorHandler(res, 500, 'no user found with this email')

        const isMatch = await bcrypt.compare(password, user.password)



        console.log(isMatch, 'isMatchs')

       if(!isMatch){
        console.log(isMatch, 'isMatch')
        return errorHandler(res, 401, 'wrong passwrod or email')
       }
       
       const token = await generateToken(user._id.toString())
       cookieSetter(res,token, true);



       return res.status(200).json({
        success:true,
        msg:`welcome back ${user.name}`
       })

    }
)


export default login