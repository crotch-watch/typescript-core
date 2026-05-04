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
