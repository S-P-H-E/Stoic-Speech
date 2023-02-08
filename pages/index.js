import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import Cato from '@/public/images/authors/Cato.png'
import Epictetus from '@/public/images/authors/Epictetus.png'
import MarcusAurelius from '@/public/images/authors/Marcus Aurelius.png'
import Seneca from '@/public/images/authors/Seneca.png'
import Zeno from '@/public/images/authors/Zeno.png'

import defaultProfile from '@/public/images/default.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(true)

  const [profile, setProfile] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://stoicquotesapi.com/v1/api/quotes/random')
      const data = await res.json()
      setQuote(data.body)
      setAuthor(data.author)
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (author === 'Cato') {
      setProfile(Cato)
    } else 
    if (author === 'Epictetus') {
      setProfile(Epictetus)
    } else
    if (author === 'Marcus Aurelius') {
      setProfile(MarcusAurelius)
    } else 
    if (author === 'Seneca') {
      setProfile(Seneca)
    } else
    if (author === 'Zeno') {
      setProfile(Zeno)
    }

  }, [author])

  return (
    <>
      <Head>
        <title>Stoic Speech</title>
        <meta name="description" content="Get insightful quotes from the Stoics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex justify-center items-center h-screen flex-col ${inter.className}`}>
        {loading ? (
          <>
          <div className='cursor-progress bg-[#ffffff] text-[#000000] p-16 rounded-xl shadow-2xl text-center max-w-lg animate-pulse'>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='w-[300px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            <p className='flex justify-center items-center uppercase font-medium rounded-lg h-3 w-[200px] bg-gray-200 text-gray-200 m-5'></p>
          </div>
          <div className='w-full flex justify-center items-center m-7'>
            <div className='bg-white rounded-full h-[55px] w-[55px] flex justify-center items-center shadow-xl'>
              <div className="h-[45px] w-[45px] bg-gray-200 rounded-full"/>
            </div>
            <div className='bg-white p-4 m-2 rounded-full font-medium shadow-2xl'>
              <p className='w-[190px] font-medium text-2xl h-3 break-words rounded-lg bg-gray-200 text-gray-200 m-2'/>
            </div>
          </div>
        </>
        ) : (
          <>
          <div className=' cursor-default bg-[#ffffff] text-[#000000] p-16 rounded-xl shadow-xl text-center max-w-lg'>
            <p className='font-medium text-2xl break-words'>{`"${quote}"`}</p>
            <p className='pt-6 uppercase text-[#999999] font-medium'>{author}</p>
          </div>
          {/* Footer */}
          <div className='w-full flex justify-center items-center m-7'>
            <Image src={profile} onError={(e) => { e.target.src = defaultProfile }} className="h-[55px] w-[55px] bg-white rounded-full p-1 shadow-xl"/>
            <div className='bg-white p-4 m-2 rounded-full font-medium shadow-2xl'>Developed by Sphe. 2023</div>
          </div>
          </>
        )}
      </div>
    </>
  )
}
