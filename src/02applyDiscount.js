const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: () => `Box(${x})`,
    })

// TASK : Refactor imperative code to a single composed expression using Box

const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
    const replaced = str.replace(/%/g, '')
    const number = parseFloat(replaced)
    return number * 0.01
}

const applyDiscount = (price, discount) => {
    const cost = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cost - cost * savings
}

module.exports = applyDiscount