type NonEmptyArray<T> = readonly [T, ...T[]]

function hasHead<T>(array: ReadonlyArray<T>): array is NonEmptyArray<T> {
  return array.length > 0
}

function headOf<T>(array: NonEmptyArray<T>) {
  return array[0]
}

type GetHeadOfArgs<T> = {
  readonly array: ReadonlyArray<T>
  readonly fallback: T
}

function getHeadOf<T>({ array, fallback }: GetHeadOfArgs<T>): T {
  if (hasHead(array)) return headOf(array)
  else return fallback
}

const array: ReadonlyArray<number> = [1, 2]
const fallback: number = 0

getHeadOf({ array, fallback })
