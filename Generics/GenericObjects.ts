type TypePair<T, U> = {
  1: T
  2: U
}

const string_number: TypePair<string, number> = {
  1: "",
  2: 0
}

const number_string: TypePair<number, string> = {
  1: 0,
  2: ""
}
// what's their advantage over normally typing these objects
// locking in structure but it could be done the other way as well
// if i would have used the other way the type would be locked
// but id keys are to remain same but object has to accept mutliple types
// then it could be used

type HTML_Element<Element extends HTMLElement> = {
  name: keyof HTMLElementTagNameMap
  2: Element
}

// there could be two levels of strictness one where I want obj.
// to only accept a certain type like string in E1's case
// but 1 could force some structure with freedom

const html_element: HTML_Element<HTMLAnchorElement> = {
  name: "a",
  2: document.createElement("a")
}
