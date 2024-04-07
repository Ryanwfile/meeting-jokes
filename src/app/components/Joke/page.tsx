import { Joke } from "@/types/types"

export default function JokeComponent(joke: Joke) {
  return <div>
    <h1>{joke.title}</h1>
    <h2>{joke.author}</h2>
    <h3>{joke.content}</h3>
    <h4>{joke.isSafeForWork}</h4>
  </div>
}