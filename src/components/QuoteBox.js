import React, { useEffect, useState } from "react";
import useRandomJoke from "hooks/useRandomJoke";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const joke = useRandomJoke();

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let random = Math.floor(Math.random() * data.length);
        setQuote(data[random]);
      });
  };
  return (
    <div className="max-w-3xl mx-auto py-10">
      <p className="font-bold text-xl italic">{quote.text}</p>

      <p>
        <span className="font-bold text-sm">{quote.author}</span>
      </p>

      <p className="font-bold text-xl italic pt-4">{joke.value}</p>
      <div className="mt-2">
        <a
          className="text-lg font-bold"
          href={joke.url}
          target="_blank"
          rel="noreferrer"
        >
          More Chuck Jokes
        </a>
      </div>
    </div>
  );
};
export default QuoteBox;
