// export default function Quotes(props: any){
//   return <div className="slide-container">
//     {props.content && props.content.length > 0 && props.content.map((string: string) => {
//       return <div key={string}>
//         {string}
//       </div>
//     })}
//   </div>
// }
import styles from "./styles.module.scss";
import JokeComponent from "../Joke/page";
const DUMMY_JOKE = {
  jokeId: '1',
  title: 'title test TITLE I says title',
  content: 'content test',
  author: 'test author',
  isSafeForWork: false
}

const DUMMY_JOKE2 = {
  jokeId: '2',
  title: 'title2 test TITLE2 I says title',
  content: 'content test2',
  author: 'test author2',
  isSafeForWork: false
}
// const DUMMY_ARR = ["I'm the first index", "Number 2", "Three here", "four is bored four years ago"]
const DUMMY_ARR = [DUMMY_JOKE, DUMMY_JOKE2]

export default function Quotes() {
  return <div className={styles.elementToFadeInAndOut}>
    {DUMMY_ARR.map((joke) => <JokeComponent 
    jokeId={joke.jokeId} 
    title={joke.title} 
    content={joke.content} 
    author={joke.author} 
    isSafeForWork={joke.isSafeForWork} 
    key={joke.jokeId} />)}
  </div>
}