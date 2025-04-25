const chars = ["a", "b", "c"]

chars.map((char) => char.toUpperCase())
// in this case char is correctly inferred to be string
// here it is Generic <T>

document
  .querySelector("button")
  ?.addEventListener("click", (event) => console.log(event))
// here the event is inferred to be MouseEvent
// as type of args that will be expected at execution were typed
// at declaration
