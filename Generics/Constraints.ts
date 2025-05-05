type Length = {
  length: number
}

type LengthIdentity = <T extends Length>(value: T) => T
// this acts as a constraint that narrows down the value our generic fn. accepts

const requiresLength: LengthIdentity = (value) => value

requiresLength([])
requiresLength("")
requiresLength({ length: 12 })

requiresLength(new Set())
// TS throws error as sets don't have length

type Include = {
  text: string
}

type IncludesGeneric = <T extends Include>(value: T) => string

const objectIncludes: IncludesGeneric = (value) => value.text

objectIncludes({ text: "string", class: "string" })
// This can be used in this manner as well where I need to make sure our Fn.
// takes a specific kind of an obj. but the obj. itself can have infinite props.

type Includes = {
  text: string
  [key: string]: string
}
// but this isn't a 1-1 replacement as now values can only be string
// but it can be better as this serves as another constraint just not on a generic
// but similar I am tied down to keys and values being string
