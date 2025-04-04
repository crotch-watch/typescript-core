const sym: symbol = Symbol("unique")
console.log(sym)

const person = {
    [sym]: 1234,
    name: "person",
    getID() {
        return this[sym]
    }
}

console.log(person[sym])
console.log(person.getID())
