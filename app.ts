interface User {
  username: string
  pin_number: number
}

interface ReadonlyUser {
  readonly username: string
  readonly pin_number: number
}

const user: User = {
  username: "Adam",
  pin_number: 1234,
}

// function freeze(user: User): ReadonlyUser { // :Readonly<Person>
//   return Object.freeze(user);
// }

// We need two interfaces & we need freeze function for each type

// V2
function freeze<T>(obj: T): Readonly<T> {
  // :Readonly<Person> // Click readonly and explain
  return Object.freeze(obj)
}

const freezedUser = freeze(user)

// Partial & Required mapped type
type Point3D = {
  x: number
  y: number
  z: number // z?: number
}

type Point2D = Partial<Point3D>
const point: Point2D = { x: 1, y: 10 }

// Pick mapped type // behaves slightly differently
interface Song {
  title: string
  duration: number
}

// type NewSong<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

const song: Pick<Song, "title"> = {
  title: "Eleanor",
}

// Record mapped type
interface PageInfo {
  title: string
}

type Page = "home" | "about" | "contact"

const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
}

// Nullable

// Use cases: updating state in React.
