export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}


// Vulnerable divide function
export function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    /*
    if (typeof b ==='string')
    return  eval(b)
     */
    return a / b
}
