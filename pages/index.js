import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(true)

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

  return (
    <>
      <Head>
        <title>Stoic Speech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex justify-center items-center h-screen ${inter.className}`}>
        {loading ? (
          <div className=' bg-[#ffffff] text-[#000000] p-16 rounded-xl shadow-2xl text-center max-w-lg animate-pulse'>
            <p className='font-medium text-2xl break-words rounded-lg text-white'>Be tolerant with others and strict with yourself.</p>
            <p className='pt-6 uppercase font-medium rounded-lg text-white m-1'>Marcus Aurelius</p>
          </div>
        ) : (
          <div className=' bg-[#ffffff] text-[#000000] p-16 rounded-xl shadow-2xl text-center max-w-lg'>
            <p className='font-medium text-2xl break-words'>{`"${quote}"`}</p>
            <p className='pt-6 uppercase text-[#999999] font-medium'>{author}</p>
          </div>
        )}
      </div>
    </>
  )
}
