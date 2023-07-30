import { connectDB } from "@/utils/features"
import { Task } from "@/models/task"
import { asyncError, errorHandler } from "@/middleware/error";

const handler = asyncError(
    async (req, res) => {


        if(req.method !== "POST"){
           return errorHandler(res, 400, 'only post method is allowed')
        }
        const {title, description} = req.body;
    
        connectDB();
        await Task.create({
            title,
            description
        })
    
        res.json({
            success: true
        })
    
    } 
);

export default handler