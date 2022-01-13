// function nextCharForNumberString(str) {
//     const trimmed = str.trim()
//     const number = parseInt(trimmed)
//     const nextNumber = number + 1
//     return String.fromCharCode(nextNumber)
// }

// Put the parameter in a box
function nextCharForNumberString(str) {
    // map enables composability
    // Each expression has its own state completely contained
    return [str]
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
}

const result = nextCharForNumberString(' 64')
console.log(result)
// [ 'A' ]
// The output is also in a box