const numbers: number[] = [1, 2, 3]

const strings: Array<string> = ["1", "2"]

const string_or_number: (string | number)[] = [1, "2"]

type Notebook = {
  [key: string]: string
}

const notebooks: Notebook[] = [{ title: "", pages: "12" }]
