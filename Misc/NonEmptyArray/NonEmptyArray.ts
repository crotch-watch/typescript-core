export type EmptyList = readonly []

export type NonEmptyList<T> = readonly [NonNullable<T>, ...NonNullable<T>[]]

export type List<T> = EmptyList | NonEmptyList<T>

export function elementsIn<T>(array: List<T>): array is NonEmptyList<T> {
  return array.length > 0
}

function headOf<T>(array: NonEmptyList<T>): T {
  return array[0]
}

type GetHeadOfArgs<T> = {
  readonly array: List<T>
  readonly fallback: T
}

function getHeadOf<T>({ array, fallback }: GetHeadOfArgs<T>): T {
  if (elementsIn(array)) return headOf(array)
  else return fallback
}

const array: NonEmptyList<number> = [1, 2]
const fallback: number = 0

getHeadOf({ array, fallback })

type ListPredicate<T> = (item: NonNullable<T>, index: number) => boolean

export function filter<T>(
  array: NonEmptyList<T>,
  predicate: ListPredicate<T>
): List<T> {
  const result: NonNullable<T>[] = []
  let index = 0

  for (const item of array) {
    if (predicate(item, index)) result.push(item)

    index++
  }

  return result as unknown as List<T>
}

export function map<T, U>(
  array: NonEmptyList<T>,
  callback: (item: NonNullable<T>, index: number) => NonNullable<U>
): NonEmptyList<U> {
  const result: NonNullable<U>[] = []
  let index = 0

  for (const item of array) {
    result.push(callback(item, index))
    index++
  }

  return result as unknown as NonEmptyList<U>
}

export function reduce<T, U>(
  array: NonEmptyList<T>,
  callback: (
    previous: NonNullable<U>,
    current: NonNullable<T>,
    index: number
  ) => NonNullable<U>,
  initial: NonNullable<U>
): NonNullable<U> {
  let accumulator: NonNullable<U> = initial
  // what if T/initial is an object ?
  let index = 0

  for (const item of array) {
    accumulator = callback(accumulator, item, index)

    index++
  }

  return accumulator
}

type Primitives = string | number | bigint | boolean

type PrimitiveList<T extends Primitives> = NonEmptyList<T>

function includes<T extends Primitives>(
  array: PrimitiveList<T>,
  query: T
): boolean {
  for (const item of array) {
    if (item === query) return true
  }

  return false
}

function findIndex<T>(
  array: NonEmptyList<T>,
  predicate: ListPredicate<T>
): number {
  let index = 0

  for (const item of array) {
    if (predicate(item, index)) return index
    else index++
  }

  return -1
}

function every<T>(
  array: NonEmptyList<T>,
  predicate: ListPredicate<T>
): boolean {
  let index = 0

  for (const item of array) {
    if (!predicate(item, index)) return false
    else index++
  }

  return true
}
