type Blogger = {
  name: string
  age: number
  email: string
}

// type Blog = {
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

type RewardDetails = {
  name: string
  date: Date
}

type Rewards = {
  [key: string]: AwardDetails
}

type Blog = {
  readonly id: number
  title: string
  content: string
  date: Date
  blogger: Blogger
  rewards: Rewards
  publisher?: string
}

const blog1: Blog = {
  id: Math.random(),
  title: "typing nested objects",
  content: "we'll get to know how to type nested objects",
  date: new Date(),
  blogger: {
    name: "John Doe",
    age: 30,
    email: "johndoe@email.com"
  },
  rewards: {
    nobel: {
      name: "Nobel",
      date: new Date()
    }
  },
  publisher: "Penguin"
}

// blog1.id = 12
//      ?^ error