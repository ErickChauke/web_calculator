// Mathematical operations implementation
// All operations are implemented manually without using eval() or built-in calculation functions

import type { OperationType } from './types.js';

// Performs addition of two numbers
function performAddition(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

// Performs subtraction of two numbers
function performSubtraction(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
}

// Performs multiplication of two numbers
function performMultiplication(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
}

// Performs division of two numbers
// Returns zero if attempting to divide by zero
function performDivision(firstNumber: number, secondNumber: number): number {
    if (secondNumber === 0) {
        return 0;
    }
    return firstNumber / secondNumber;
}

// Executes the appropriate mathematical operation based on the operation type
function executeOperation(
    firstNumber: number,
    secondNumber: number,
    operation: OperationType
): number {
    switch (operation) {
        case 'add':
            return performAddition(firstNumber, secondNumber);
        case 'subtract':
            return performSubtraction(firstNumber, secondNumber);
        case 'multiply':
            return performMultiplication(firstNumber, secondNumber);
        case 'divide':
            return performDivision(firstNumber, secondNumber);
        default:
            return secondNumber;
    }
}

// Converts a number to its negative or positive equivalent
function toggleNumberSign(value: number): number {
    return value * -1;
}

// Converts a number to its percentage value (divides by 100)
function convertToPercentage(value: number): number {
    const percentageDivisor: number = 100;
    return value / percentageDivisor;
}

export {
    executeOperation,
    toggleNumberSign,
    convertToPercentage
};
