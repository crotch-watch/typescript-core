let string: any = "string"

// default js behaviour
string = [string]

// turns off type-checking completely
const returnValue = function (value: any) {
    return value
}

console.log(returnValue(string))
