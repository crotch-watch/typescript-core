function function_declaration(param1: string, param2: number): string {
  return param1 + param2
}

const function_expression = function (
  param1: string,
  param2: number
): string | number {
  return param1 + param2
}

const arrow_function = (param1: string, param2: number): string | number =>
  param1 + param2
