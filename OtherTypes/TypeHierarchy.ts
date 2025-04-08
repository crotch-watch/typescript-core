type str = string
type num = number

type check1 = str extends string ? true : false
type check2 = num extends number ? true : false

type check3 = any extends unknown ? true : false
type check4 = unknown extends any ? true : false

// both extend each other !?
// const a: check3 | check4 = false
// ^ error

type check5 = Function extends Object ? true : false
type check6 = [] extends Object ? true : false

type check7 = [string, number] extends Array<any> ? true : false
