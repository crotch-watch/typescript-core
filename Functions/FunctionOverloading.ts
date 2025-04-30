// function type signature
function greeter(fn: (a: string) => void) {
  fn("Hello")
}

greeter(console.log)

// since funcs. are callable objects
// objects have multiple properties and function type expression doesn't allow this
// as in func. object with other props.
// call signatures
type DescriptiveGreeter = {
  (fn: (a: string) => void): void
  property: string
}

const descriptiveGreeter: DescriptiveGreeter = (fn) => {
  fn("Hello")
}
descriptiveGreeter.property = "property"
descriptiveGreeter(console.log)

// overload signatures
function overload(str1: string, num1: number): void
function overload(num1: number, string1: string): string
// implementation signature
function overload(arg1: number | string, arg2: string | number) {
  if (typeof arg1 === "number") return arg2
}

type Overloaded = {
  (string?: string, number?: number): string
  (string?: number, number?: string): number
}
