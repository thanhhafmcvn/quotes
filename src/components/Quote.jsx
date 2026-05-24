import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [authorShown, setAuthorShown] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const API_URL = `https://dummyjson.com/quotes/random`;
  const SEARCH_URL = `https://google.com/search?q=${authorName}`;
  const SECURE = `https://api.allorigins.win/raw?url=${encodeURIComponent(API_URL)}`;
  setTimeout(() => {
    setAuthorShown(true);
  }, 3000);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json()
        console.log(data)
        setQuoteData(data.quote);
        setAuthorName(data.author)
      }
      catch (err) {
        console.log(err)
      };

    };
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-12 bg-black">
      <div className=" w-full max-w-3xl mx-auto text-center">
        <h1 className="text-white text-left font-sans font-black text-xl sm:text-3xl md:text-3xl lg:text-5xl animate-fade w-100" id="content">
          {quoteData}
        </h1>
        <div className="mt-4 md:mt-6 text-base sm:text-sm md:text-lg lg:text-xl text-white tracking-widest font-thin leading-normal break-words">
          <h3 className={authorShown ? "opacity-1 cursor-pointer" : "opacity-0"} onClick={() => window.open(SEARCH_URL, '_blank')} id="author">
            {authorName}
          </h3>
        </div>
        <div>
          <h4 className="mt-3 md:mt-5 text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            Click the name to find out.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Quote;
