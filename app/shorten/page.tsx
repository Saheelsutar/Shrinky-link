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
      <div className='bg-mycolor min-h-screen h-fit max-md:flex-col max-md:items-center  flex justify-center'>
        <Image width={100} height={100} unoptimized className='w-1/3 h-fit max-md:hidden' src="/login.png" alt="" />
        
        <motion.form 
          className="max-md:w-[90%] mx-auto p-10  m-10 w-[28%] h-fit bg-gray-700  [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),#b8860b80_80%,_#daa520_86%,_#ffd700_90%,_#daa520_94%,_#b8860b80)_border-box] rounded-2xl border-4 border-transparent animate-border"
          initial={{ opacity: 0, height: "50px" }} // Start small
          animate={{ opacity: 1, height: isLoading ? "250px" : "auto" }} // Expand when data is loaded
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
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
      </div>
      <Footer/>
    </>
  )
}

export default Page
