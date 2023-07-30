import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt  from 'bcrypt'


const { asyncError, errorHandler } = require("@/middleware/error");




const register =
  (  async (req, res) => {

        if (req.method !== "POST") {
            return errorHandler(res, 400, 'only post method is allowed')
        }

        try {
            const { email, password, name } = req.body;
            if (!email || !password || !name) return errorHandler(res, 500, 'please provide all the fields')

            await connectDB();

            let user = await User.findOne({ email });

            if (user) return errorHandler(res, 500, 'user already exist')

            const hashedPassword = await bcrypt.hash(password, 10);

            user = await User.create({
                email, password: hashedPassword, name
            })
            console.log(user._id.toString())
            const token = await generateToken(user._id.toString())
            // console.log(token)
            cookieSetter(res, token, true);


            return res.status(201).json({
                success: true,
                message: 'successfully registered in'
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                msg: 'internal server error'
            })
        }
    }
)

export default register