import { Article } from "./OptionalReadonly"

class Archive extends Article {
 readonly contributor: string

  constructor(
    uid: number,
    heading: string,
    contributor: string,
    source?: string
  ) {
    // can operate on data before passing it as args.
    super(uid, heading, source)
    // calls the constructor of parent class
    // has same signature
    // all assignments of the super class are done first
    this.contributor = contributor
  }

  unarchive(): void {
    console.log("this has been unarchived")
  }
}

const archive = new Archive(12, "heading", "me", "www.google.com")
archive.unarchive()
