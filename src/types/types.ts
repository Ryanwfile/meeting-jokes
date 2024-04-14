export interface Joke {
  jokeId: string,
  title: string,
  content: string,
  author: string,
  isSafeForWork: boolean,
  isActive?: boolean
}