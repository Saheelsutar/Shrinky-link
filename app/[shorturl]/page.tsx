
import { redirect } from 'next/navigation'
import connectDB from '@/db/connectDb'
import User from '@/models/User'



export default async function Page({ params,}: {params: Promise<{ shorturl: string }>
}) {
       const { shorturl } = await params
        await connectDB()
        const user=await User.findOne({shortUrl:shorturl})
        const redirect_url=user?.url;
        if(user){
            redirect(redirect_url)
        }else{
            redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`)
        }
    
    }
  
