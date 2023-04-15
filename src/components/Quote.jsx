import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quote = () => {
  const API_URL = "https://api.quotable.io/quotes/random";
  const [quoteData, setQuoteData] = useState([])
  const [showAuthor, setShowAuthor] = useState(false);
  setTimeout(() => {
    setShowAuthor(true)
  },3000)
  const fetchQuote = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;
    setQuoteData(data);
  }
  useEffect(
    () => { fetchQuote() }, []
  )

  return (
    <div className="w-screen h-screen bg-black flex flex-1 justify-center items-center flex-col p-[200px]">
      <div className=" flex flex-1 justify-center items-center flex-col ">
        <h1 className='text-white text-center font-sans font-bold text-[50px] animate-fade w-100'>{quoteData[0]?.content}</h1>
        <div className={'text-white font-extralight text-[30px] mt-[40px]'}>
          <h3 className={showAuthor ? 'opacity-1' : 'opacity-0'}>{quoteData[0]?.author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Quote