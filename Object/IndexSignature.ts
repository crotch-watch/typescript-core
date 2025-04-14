type Writer = {
  name: string
  age: number
  email: string
}

// type Book = {
//   title: string
//   content: string
//   date: Date
//   author: Author
//   awards: {
//     [key: string]: {
//       name: string
//       date: Date
//     }
//   }
// }

// type Award = {
//   [key: string]: {
//     name: string
//     date: Date
//   }
// }

type AwardDetails = {
  name: string
  date: Date
}

type Awards = {
  [key: string]: AwardDetails
}

type Book = {
  title: string
  content: string
  date: Date
  author: Author
  awards: Awards
}

const book1: Book = {
  title: "typing nested objects",
  content: "we'll get to know how to type nested objects",
  date: new Date(),
  author: {
    name: "John Doe",
    age: 30,
    email: "johndoe@email.com"
  },
  awards: {
    nobel: {
      name: "Nobel",
      date: new Date()
    }
  }
}
