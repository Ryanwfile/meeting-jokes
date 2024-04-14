import { Joke } from "@/types/types"

export default function JokeComponent(joke: Joke) {
  return <div 
  className="animate-pulse delay-10000 duration-1000 transform-gpu">
    <h1>{joke.title}</h1>
    <h2>{joke.author}</h2>
    <h3 className="text-xl">{joke.content}</h3>
    <h4>{joke.isSafeForWork}</h4>
  </div>
}