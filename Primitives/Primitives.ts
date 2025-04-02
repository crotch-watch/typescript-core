let str = "string"
let num = 12
let flag = true

// since constants can't be mutated TS literally assigns the type
const text = "text"
const number = 12

// expressions that evaluate to a type are inferred
let inferStr = typeof str !== "string" ? "string": "number"
let inferNum = parseInt(num.toString())
const inverseFlag  = !flag
const inferBool = 11 < num
