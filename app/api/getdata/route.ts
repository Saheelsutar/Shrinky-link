
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export async function GET(request: Request) {
    try{
    console.log(request)
    await connectDB()
    const user=await User.find()
    return Response.json({user})

    }catch(error){
        return Response.json(error)
    }
    
}