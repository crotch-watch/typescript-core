const do_something = (
  on_this_value: string,
  incorporate_this: number,
  optional?: boolean
): void => {
  //  optional will be a union of type annotated and undefined
  // as it maybe absent on invocation
}

const authenticate = (user: string, id: number, age = 12) => {
  // age will assume type of number
  // if value is passed 12 would be it's default value
}
