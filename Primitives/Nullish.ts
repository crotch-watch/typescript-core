// unassigned vars are undefined
let value

let anotherValue: null
// TS throws assignment error as by default it's undefined but,
// we have explicitly annotated it to be null
console.log(anotherValue)

// void is fundamentally undefined but states the intent that
// expression wont return anything i.e. undefined
const returnVoid = (a): void => {
   console.log(a)
}

let voidVal = returnVoid("")

// only undefined can be assigned
let undef: void = undefined

undef = null
// ^? error

// void is also an operator in js any expression with void
// return nothing
const asyncFn = async () => {
   return true
}

void asyncFn()