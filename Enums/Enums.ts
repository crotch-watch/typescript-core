const LEFT = "left"
const RIGHT = "right"
// so on..

// for identifiers or label where I use these
// constants for equality checks or assignments
// I'd have to manually write a type like this

// type Directions = "left" | "right" | "up" | "down"

// for a value which accepts this as a argument
// or similar situation assignments

enum Direction {
  left,
  right,
  up,
  down
}

// This encapsulates both and streamlines values
// and type declaration both at once

type Shape = {
  structure: string
  direction: Direction
}

// directions exists both as a value Direction.left
// and also as a type

const circular: Shape = {
  structure: "cicular",
  direction: Direction.left
}

// by default these are initalised with numeric values
// starting from 0 every successive prop is +=1 previous
// I can also assign any one of them with number
// next would be += 1

enum Direction {
  ahead = 12,
  behind,
  over,
  under
}

enum Direction {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west"
}
// Enums will merge into one with all members

const hyperbola: Shape = {
  structure: "conic",
  direction: Direction.NORTH
}

enum Direction {
  invalid,
  // In an enum with multiple declarations,
  // only one declaration can omit an initializer for its first enum element.
}

// enum members act as readonly
Direction.EAST = "north"
Direction.up = Direction.down

// more than one member can have same values

enum Direction {
  tangential = "north"
}
// Be mindful to use them in equality checks