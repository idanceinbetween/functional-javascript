const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: () => `Box(${x})`,
    })

// TASK : Refactor imperative code to a single composed expression using Box

// Box is good at un-nesting expressions
const moneyToFloat = str =>
    Box(str)
        .map(str => str.replace(/\$/g, ''))
        .map(r => parseFloat(r))

const percentToFloat = str =>
    Box(str.replace(/%/g, ''))
        .map(parseFloat) // Short hand - is it easier or harder to read?
        .map(i => i * 0.01)

const applyDiscount = (price, discount) =>
    // Remember how many levels deep we are, so we're not putting Box in Box
    // It is easy to see - we have two assignments (.map .map / .fold .fold), so we have two boxes
    moneyToFloat(price)
        .fold(cost => // cost is captured in this closure and we can access it in the next assignment
            percentToFloat(discount)
                .fold(savings => cost - cost * savings))

module.exports = applyDiscount