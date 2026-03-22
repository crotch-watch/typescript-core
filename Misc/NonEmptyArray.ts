/**
 * TYPE-SAFE NON-EMPTY ARRAYS
 * A journey from runtime checks to type-level guarantees.
 */

// --- ITERATION 1: Defining the Constraint ---
// Uses Variadic Tuple Types to ensure at least one element exists.
type NonEmptyArray<T> = [T, ...T[]];

// Validates at compile time
const valid: NonEmptyArray<number> = [1];

// Error: Source has 0 elements
const invalid: NonEmptyArray<number> = [];

// --- ITERATION 2: Interacting with Generic Arrays ---
// Standard Array<T> doesn't track length. We must "bridge" the two.

function headOf<T>(array: NonEmptyArray<T>): T {
  return array[0]; // Guaranteed to be T, not T | undefined
}

// A. The Manual Way (Casting)
// Dangerous if the length check is forgotten or incorrect.
const rawArray = ["data"];

if (rawArray.length > 0) {
  headOf(rawArray as NonEmptyArray<string>);
}

// B. The idiomatic way (Type Guard)
// Safely "promotes" a standard array to a NonEmptyArray.
function hasElements<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length > 0;
}

const maybeEmpty = [1, 2, 3];

if (hasElements(maybeEmpty)) headOf(maybeEmpty);
// TypeScript now treats this as NonEmptyArray

// --- ITERATION 3: The "Unsafe Access" Edge Case ---
// WARNING: TS doesn't flag index access during initialization.
// This will technically "pass" the type check but return undefined at runtime.
const emptySource: number[] = [];

const fakeNonEmpty: NonEmptyArray<number> = [emptySource[0], ...emptySource];

// --- ITERATION 4: Handling Empty States ---
// When an array is strictly empty, it is better represented as never[] or [].
const processData = (array: number[] | never[]): number[] | never[] => {
  // Mapping over never[] correctly returns never[]
  return array.length > 0 ? array.map((n) => n * 2) : [];
};

// --- FINAL VERDICT: Is it worth the complexity? ---
/*
 * PROS:
 * - Eliminates repetitive "if (item)" checks in deep logic.
 * - Self-documenting: The function signature enforces the requirement.
 * * CONS:
 * - Standard APIs return T[], requiring "hasElements" checks at the boundaries.
 * T | undefined is often simpler for general utilities.
 */

// Example usage of the Type Guard pattern:
const data = [10, 20];

if (hasElements(data)) {
  console.log(`The head is: ${headOf(data)}`);
}
