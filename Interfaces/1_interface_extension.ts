/**
 * interface is similar to type alias in sense of defining the structure of the object
 * but interface symantically is meant to state that the typed object is supposed to expose
 * it's public members for other constructs(objects, classes or functions) for communicating with them.
 * since classes have abstracted away basic implementation details into themselves
 * interface is used to tell other constructs what properties are available and their types
 * also which methods are available and their signatures.
 */

interface Details {
  name: string
  age: number
  phone: number
}

/**
 * here in order to add some members to the interface I can manually add them
 * in another interface
 */

interface DetailsWithGender {
  name: string
  age: number
  phone: number
  gender: string
}

/**
 * this has 2 issues
 * 1. code repetition
 * 2. if Details has some changes those won't be reflected in DetailsWithGender
 * Sol: I can use extends keyword and inherit the members of one interface into it's child interface
 */

interface DetailsWithAddress extends Details {
  address: string
}

const user: DetailsWithAddress = {
  name: "me",
  age: 27,
  phone: 1234567890,
  address: "India",
}
