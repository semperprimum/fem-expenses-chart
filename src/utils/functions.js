export const percentageOf = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return "Invalid input";

    let result = (num1 / num2) * 100;
    return result.toFixed(2) + "%";
}

export const getTotal = (arr) => {
    let result = 0;
    arr.forEach(obj => {
        result += obj.amount
    })
    return result;
}

export const getGreatestNumber = (arr) => {
    const numbers = []
    arr.forEach(item => {
        numbers.push(item.amount)
    })
    return Math.max(...numbers)
}
