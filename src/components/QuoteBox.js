import React, { useEffect, useState } from "react";
import useRandomJoke from "hooks/useRandomJoke";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const joke = useRandomJoke();

  console.log("joke", joke.value);

  console.log("quote", quote);

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
    <div className="max-w-3xl mx-auto">
      <p className="text-sm font-semibold italic">{quote.text}</p>

      <p>
        <span>{quote.author}</span>
      </p>
      <p className="text-sm font-semibold italic">{joke.value}</p>
      <div className="mt-10">
        <a
          className="text-lg font-bold"
          href={joke.url}
          target="_blank"
          rel="noreferrer"
        >
          Ha Ha
        </a>
      </div>
    </div>
  );
};
export default QuoteBox;
