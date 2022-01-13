// function nextCharForNumberString(str) {
//     const trimmed = str.trim()
//     const number = parseInt(trimmed)
//     const nextNumber = number + 1
//     return String.fromCharCode(nextNumber)
// }

// returns an object literal expression
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#advanced_syntax
// "... you may need to wrap the object literal in parentheses if the object appears where a statement is expected"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_object_initializers
const Box = x =>
    ({
        map: fn => Box(fn(x)),
        fold: fn => fn(x),
        inspect: () => `Box(${x})`,
    })

// Put the parameter in a box
function nextCharForNumberString(str) {
    // map enables composability
    // Each expression has its own state completely contained
    return Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
        .fold(c => c.toLowerCase())
}

const result = nextCharForNumberString(' 64')
console.log(result)
// a