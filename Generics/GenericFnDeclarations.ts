type FirstElement = <T>(value: T[]) => T
// T type parameter is required to be emallest unit of the structure
// in order for me to construct complex type structures

const firstElement: FirstElement = (value) => value[0]

firstElement([1, 2, 3])

type SecondElement<T> = (value: T[]) => T

const secondElement: SecondElement<string> = (value) => value[1]
// here TS throws error ^? if no type param, that this type requires a type parameter
// in first case TS inferred it correctly
// by doing this I'm indicating that this is only accepts one type

secondElement(["1", "2", "3"])

type ThirdElement<T> = <T>(value: T[]) => T

const thirdElement: ThirdElement<number> = (value) => value[2]
// in this case TS leaves does use this just like a variable in outer scope is left

thirdElement([1, 2, 3])
