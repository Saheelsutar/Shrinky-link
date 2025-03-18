import { NextResponse } from "next/server";
import connectDB from "@/db/connectDb";
import User from "@/models/User";
export async function POST(req: Request) {
    try {
        const form = await req.json(); 
        await connectDB();
        const user=await User.findOne({shortUrl:form.shortUrl})

        if(!user){
          await User.create({url:form.url,shortUrl:form.shortUrl})
          return NextResponse.json({ message: "true" });
        }
        return NextResponse.json({ message: "false" });

      } catch (error) {
        console.log(error)
        return NextResponse.json(
          { error: "Failed to process request" },
          { status: 400 }
        );
      }
  }