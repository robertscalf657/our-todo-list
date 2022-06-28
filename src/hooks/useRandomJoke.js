import { useEffect, useState } from "react";

const useRandomJoke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async() => {
        await fetch(`https://api.chucknorris.io/jokes/random`)
        .then((res) => res.json())
        .then((data) => setJoke(data))
    }
    fetchJoke();
  }, []);

  return joke
};

export default useRandomJoke;
