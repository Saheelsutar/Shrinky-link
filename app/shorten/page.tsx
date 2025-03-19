"use client"
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Image from 'next/image'

const Page = () => {
  interface DataItem {
    _id: string;
    url: string;
    shortUrl: string;
  }

  const [form, setform] = useState({ url: "", shortUrl: "" })
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState<DataItem[]>([])
  const [isLoading, setIsLoading] = useState(true) // Track data loading
  const router = useRouter()

 useEffect(() => {
   getData()
 }, [update])
   
 
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/getdata');
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json();
      setData(json.user)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [update])

  const handleSubmit = async () => {
    const res = await fetch("/api/createurl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json()
    if (data.message == "false") {
      alert('Url Already Exists!!')
      return;
    }
    console.log("Url shortened successfully")
    setUpdate(true)
  }


  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleClick = (item: DataItem) => {
    router.push(`/${item.shortUrl}`)
  }

  return (
    <>
      <Navbar />
      {isLoading && <div className='bg-mycolor flex justify-center items-center h-screen'  role="status">
    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>}
     {!isLoading && <div className='bg-mycolor min-h-screen h-fit max-md:flex-col max-md:items-center  flex justify-center'>
        <Image width={100} height={100} unoptimized className='w-1/3 h-fit max-md:hidden' src="/login.png" alt="" />
        
        <motion.form 
          className="max-md:w-[90%] mx-auto p-10  m-10 w-[28%] h-fit bg-gray-700  [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),#b8860b80_80%,_#daa520_86%,_#ffd700_90%,_#daa520_94%,_#b8860b80)_border-box] rounded-2xl border-4 border-transparent animate-border"
         
        >
          <div className="mb-5">
            <input onChange={handleChange} type="text" name='url' value={form.url} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="Enter Your Url" required />
          </div>
          <div className="mb-5">
            <input onChange={handleChange} type="text" name='shortUrl' value={form.shortUrl} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder='Enter Your Preferred Short Url' required />
          </div>
          <div className="flex justify-center items-center">
            <button type='button' onClick={handleSubmit} 
              className="text-white bg-blue-700 p-2 m-2 rounded-lg hover:bg-blue-800">Submit</button>
          </div>

          <h3 className='text-white text-lg font-bold'>Shortened URLs</h3>
          <hr className="h-px my-4 bg-violet-200 border-0"></hr>

          <motion.div 
            className='flex p-2 text-white flex-col gap-2 justify-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {data.length !== 0 && data.map((item) => (
              <div className='flex flex-col justify-center gap-1' key={item.shortUrl}>
                <div className='text-white font-semibold'>{item.shortUrl}</div>
                <li onClick={() => handleClick(item)}
                  className='list-none underline cursor-pointer py-2 text-blue-500'>
                  {process.env.NEXT_PUBLIC_BASE_URL}/{item.shortUrl}
                </li>
              </div>
            ))}
          </motion.div>
        </motion.form>

        <Image width={100} height={100} unoptimized className='w-1/3 max-md:w-full h-fit' src="/img_2.png" alt="" />
      </div>}
      <Footer/>
    </>
  )
}

export default Page
