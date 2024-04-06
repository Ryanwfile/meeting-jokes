"use client";
import Image from "next/image";
import Joke from "./components/Joke/page";
import Jokes from "./components/Jokes/page";
import Homepage from "./components/Homepage/page";


const DUMMY_JOKE = {
  jokeId: '1',
  title: 'title test TITLE I says title',
  content: 'content test',
  author: 'test author',
  isSafeForWork: false
}
export default function Home() {
  const style = { "--i": 4 } as React.CSSProperties;
  const style2 = { "--i": 3 } as React.CSSProperties;
  const style3 = { "--i": 2 } as React.CSSProperties;
  const style4 = { "--i": 1 } as React.CSSProperties;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="leftNav">
        <li style={style2}><a>Home</a></li>
        <li style={style3} ><a>See more Jokes</a></li>
        <li style={style4}><a>Create a Joke</a></li>
      </ul>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <Joke
          jokeId={DUMMY_JOKE.jokeId}
          title={DUMMY_JOKE.title}
          content={DUMMY_JOKE.content}
          author={DUMMY_JOKE.author}
          isSafeForWork={false} />
        <Jokes />
        <Homepage />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
