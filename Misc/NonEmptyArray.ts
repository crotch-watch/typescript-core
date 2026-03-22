// iter 1: making sure array has at least 1 element with TS only
// type NonEmptyArray<Type> = [Type, ...Type[]]
// const array: NonEmptyArray<string> = []

// iter 2: how other array types interact with non-empty
type NonEmptyArray<Type> = [Type, ...Type[]]

const array = [1, 2]

// passing array literal works as expected
// head([1, 2])

// const array: Array<number> = []
// using an a generic typed array works as expected
// headOf(array)

// const array: Array<string> = []
// simple casting doesn't work, how to make non-empty from generic
// const nonEmptyArray =
// array.length > 0 ? ([...array] as NonEmptyArray<string>) : array
// headOf(nonEmptyArray)

// if check is fine but one can cast it with if as well
// if (array.length) headOf(array as NonEmptyArray<string>)

// let nonEmptyArray = array
// if (nonEmptyArray.length) {
//   nonEmptyArray as NonEmptyArray<string>
// NOTE: after casting it reverts to string[]
//   headOf(nonEmptyArray)
// }

// if some array exists and it had to conform to NonEmptyArray
// const array: Array<number> = []

// NOTE: assigning an empty array is any[] and typing it string | number array
// ensures what goes in it is number | string respectively but
// it has nothing to check elements in it
// ex: NonEmptyArray<number> = [array[0]] clearly this'll return undefined
// but it is accepted by TS
// for non-empty to be correct this needs to be rectified
// const nonEmptyArray: NonEmptyArray<number> = [array[0]]
// headOf([array[0], ...array])

// ISSUE: if an array has numbers ex: [1, 2, 3] it is annotated as Array<number>
// but if array becomes empty i.e array.length = 0 then should it be any[] ?
// but if were to be empty and then required to add numbers then
// ex: some func. was mapping over number array and required number array
//     how'd it handle the any[] or [] -> never[], what is more precise
//     can conditional types or something similar be used to handle them
// ex: as below
// const fn = (array: number[] | never[]): number[] | never[] => {
//   if (array.length > 0) {
//     return array.map((item) => item * 2)
//   }
//   return []
// }

// let's just this is the case but still the NonEmptyArray ? will it be returned at creation or what
// ex: headOf([1, 2])
// what if array already exists ex: const arr = [1, 2] but isn't explicitly typed as nonEmpty
// even if its somehow more type safe is it worth it rather than just returning T | undefined

function elementsIn<Type>(array: Array<Type>): array is NonEmptyArray<Type> {
    return array.length > 0
}

function headOf<Type>(array: NonEmptyArray<Type>): Type {
    return array[0]
}

if (elementsIn(array)) headOf(array)
