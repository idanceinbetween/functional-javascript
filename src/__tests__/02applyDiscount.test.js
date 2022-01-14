const applyDiscount = require("../02applyDiscount");

it.each([
    ['$10', '40%', 6],
    ['$5.00', '20%', 4]])("should apply discount correctly", (price, discount, result) => {
    expect(applyDiscount(price, discount)).toEqual(result);
})