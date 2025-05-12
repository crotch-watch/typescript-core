import { Article } from "./OptionalReadonly"

class Blog extends Article {
  publisher = "Govt."
}

const post1 = new Blog(1, "heading")
post1.publisher
// post1 satisfies the Article's constructor signature
// as well as implements publisher prop.
