import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [authorShown, setAuthorShown] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const API_URL = "https://api.quotable.io/quotes/random";
  const SEARCH_URL = `https://google.com/search?q=${authorName}`;
  setTimeout(() => {
    setAuthorShown(true);
  }, 3000);
  const fetchQuote = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;
    setQuoteData(data);
    setAuthorName(data[0]?.author)
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-1 justify-center items-center flex-col p-[200px]">
      <div className=" flex flex-1 justify-center items-center flex-col ">
        <h1 className="text-white text-center font-sans font-bold text-[50px] animate-fade w-100">
          {quoteData[0]?.content}
        </h1>
        <div className="text-white font-extralight text-[30px] mt-[40px]">
          <h3 className={authorShown ? "opacity-1 cursor-pointer" : "opacity-0"} onClick={() => window.open(SEARCH_URL, '_blank')}>
            {quoteData[0]?.author}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Quote;
