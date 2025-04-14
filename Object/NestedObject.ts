// type Post = {
//   title: string
//   content: string
//   date: Date
//   author: {
//     name: string
//     age: number
//     email: string
//   }
// }

type Author = {
  name: string
  age: number
  email: string
}

type Post = {
  title: string
  content: string
  date: Date
  author: Author
}

const post1: Post = {
  title: "typing nested objects",
  content: "we'll get to know how to type nested objects",
  date: new Date(),
  author: {
    name: "John Doe",
    age: 30,
    email: "johndoe@email.com"
  }
}
