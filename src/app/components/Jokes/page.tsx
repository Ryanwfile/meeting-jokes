import { Joke } from "@/types/types";
import { url } from "inspector";
import { useEffect, useState } from "react";
import JokeComponent from "../Joke/page";


const URL = 'http://localhost:8080/api/v1/jokes';

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  

  useEffect(
    function () {
      // const controller = new AbortController();
      async function fetchJokes() {
        try {
          setLoading(true);
          // const jokeData = await fetch(URL).then((response) => response.json()).then((response) => setJokes(response));
          // const res = await fetch(URL, { signal: controller.signal });
          const res = await fetch(URL);
          if (!res.ok) {
            throw new Error("Something went wrong fetching joke data, you probably messed up");
          }
          const jokeData = await res.json();
          console.log(jokeData);
          setJokes(jokeData);
        }
        catch (err) {
          console.log(`Error here, do better: =>  ${err}`);
        }
        finally {
          setLoading(false);
        }
      }

    fetchJokes();

    // return function () {
    //   controller.abort();
    // }
    }, []);

    useEffect(function() {
      setInterval(function() {
        
      }, 5000)
    })

    if(jokes && jokes.length > 0){
      return <>
      {jokes && jokes.length > 0 && jokes.map((joke: Joke) => 
      <div key={joke.jokeId}> 
        <JokeComponent jokeId={joke.jokeId} author={joke.author} title={joke.title} content={joke.content} isSafeForWork={joke.isSafeForWork}/>
      </div>)}
    </>
    }
    else {
      return <>
        Error occurred no data, what did you do?
      </>
    }

   
    


}

/**
 * export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}
 * 
 */