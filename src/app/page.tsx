"use client";
import Image from "next/image";
import Jokes from "./components/Jokes/page";
import Homepage from "./components/Homepage/page";
import Quotes from "./components/Quotes/page";
import JokeComponent from "./components/Joke/page";


const DUMMY_JOKE = {
  jokeId: '1',
  title: 'title test TITLE I says title',
  content: 'content test',
  author: 'test author',
  isSafeForWork: false
}

const jokesArray = ["I am content", "Am I on the same slide, or a different one", "this could be the 3rd slide or a stupid paragraph"]
export default function Home() {
  const style = { "--i": 4 } as React.CSSProperties;
  const style2 = { "--i": 3 } as React.CSSProperties;
  const style3 = { "--i": 2 } as React.CSSProperties;
  const style4 = { "--i": 1 } as React.CSSProperties;
  return (
    <>
      <header>
        <h1>Meetings Jokes</h1>
      </header>

      <main className="flex min-h-screen flex-row  p-24" >
        <nav>
          <ul className="leftNav">
            <li style={style2}><a>Home</a></li>
            <li style={style3} ><a>See more Jokes</a></li>
            <li style={style4}><a>Create a Joke</a></li>
          </ul>
        </nav>
        <div className=" before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="joke-container">
            <Quotes />
          </div>          
        </div>
      </main>
    </>
  );
}
