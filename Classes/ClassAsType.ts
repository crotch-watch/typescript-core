class User {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
    this.text = "text"
    //    ^? error since this property isn't declared
    // hence TS doesn't assume this prop. in class's type
  }

  greet() {
    console.log("Hello ", this.name)
  }
}

const me = new User("me", 1)
me.greet()

me.text
// even though I've assigned a prop. text to the obj.
// TS throws error as it wasn't part of init. declaration
// i.e. text: string