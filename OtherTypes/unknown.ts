let mystery: unknown;
// can be annotated where it's not immediately clear
// what would be the type and later on it'd be known

mystery = "string"

// at least warns us about uppercase mayn't exist on string
const uppercase = function (string: unknown) {
    if(typeof string === "string") return string.toUpperCase();
    else return "provide a string"
}

uppercase(mystery)

