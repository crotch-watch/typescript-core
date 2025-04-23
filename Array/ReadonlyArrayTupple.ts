const ids: readonly number[] = [1, 2, 3]

// this isn't an error
// unlike in tupple length insn't fixed
ids[4]

// these methods don't work on readonly
// like they do on [string, number] tupple

// ids.pop()
// ids.push()
// ids.length -= 1
// error ^

const info: readonly [string, string, number] = ["John", "Doe", 27]

// info.pop()
// info.push()
// info[4]
// info.length -= 1
// error ^

const storeIds: Readonly<Array<number>> = [1, 2, 3]
// alternative syntax with generics

const results: readonly [number, ...string[], boolean] = [1, "John", false]

// Last element is optional just like in normal tupple
const sales: Readonly<[string, number, ...string[]]> = ["Apple", 10]
