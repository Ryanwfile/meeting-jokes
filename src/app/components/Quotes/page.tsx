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
const DUMMY_ARR = ["I'm the first index", "Number 2", "Three here", "four is bored four years ago"]

export default function Quotes() {
  return <div className={styles.elementToFadeInAndOut}>
    {DUMMY_ARR.map((text) => <>{text}</>)}
  </div>
}