export class Article {
  uid: number
  heading: string
  readonly source?: string
  url?: string

  constructor(uid: number, heading: string, source?: string) {
    this.uid = uid
    this.heading = heading
    this.source = source
  }

  publish() {
    console.log("Article ", this.heading, "@", this.uid, " published")
  }
}

const uid = Math.random()

const oped = new Article(uid, "Breaking News")
oped.source = ""
// readonly props. can only be assigned once
// inside the constructor can't be assigned manually

const wsj = new Article(uid, "Breaking News", "insiders")
wsj.url = ""
// regular optional prop. can be added outside the class as well
wsj.publish()
