// Event handlers for calculator buttons
// Processes user interactions with the calculator

import { getState, setState, resetState } from './state.js';
import { executeOperation, toggleNumberSign, convertToPercentage } from './operations.js';
import { updateDisplay, isValidNumber } from './display.js';
import { updateOperationIndicator, clearOperationIndicator } from './display-helper.js';
import { INITIAL_DISPLAY_VALUE, DECIMAL_POINT, ZERO_VALUE } from './constants.js';
import type { OperationType } from './types.js';

// Handles number button clicks (0-9)
function handleNumberInput(digit: string): void {
    const state = getState();
    
    if (state.shouldResetDisplay) {
        setState({ currentValue: digit, shouldResetDisplay: false });
        updateDisplay(digit);
        return;
    }
    
    const newValue = state.currentValue === ZERO_VALUE 
        ? digit 
        : state.currentValue + digit;
    
    setState({ currentValue: newValue });
    updateDisplay(newValue);
}

// Handles decimal point button click
function handleDecimalInput(): void {
    const state = getState();
    
    if (state.shouldResetDisplay) {
        setState({ currentValue: ZERO_VALUE + DECIMAL_POINT, shouldResetDisplay: false });
        updateDisplay(ZERO_VALUE + DECIMAL_POINT);
        return;
    }
    
    // Prevent multiple decimal points
    if (state.currentValue.includes(DECIMAL_POINT)) {
        return;
    }
    
    const newValue = state.currentValue + DECIMAL_POINT;
    setState({ currentValue: newValue });
    updateDisplay(newValue);
}

// Handles operator button clicks (+, -, ×, ÷)
function handleOperatorInput(operator: OperationType): void {
    const state = getState();
    
    // If there is a previous operation, calculate it first
    if (state.operation !== null && state.previousValue !== '' && !state.shouldResetDisplay) {
        handleEqualsInput();
    }
    
    const currentState = getState();
    setState({
        previousValue: currentState.currentValue,
        operation: operator,
        shouldResetDisplay: true
    });
    
    const updatedState = getState();
    updateOperationIndicator(operator, updatedState.previousValue);
}

// Handles equals button click
function handleEqualsInput(): void {
    const state = getState();
    
    if (state.operation === null || state.previousValue === '') {
        return;
    }
    
    const previousNumber = parseFloat(state.previousValue);
    const currentNumber = parseFloat(state.currentValue);
    
    if (!isValidNumber(state.previousValue) || !isValidNumber(state.currentValue)) {
        return;
    }
    
    const result = executeOperation(previousNumber, currentNumber, state.operation);
    const resultString = result.toString();
    
    setState({
        currentValue: resultString,
        previousValue: '',
        operation: null,
        shouldResetDisplay: true
    });
    
    updateDisplay(resultString);
    clearOperationIndicator();
}

// Handles clear button click (AC)
function handleClear(): void {
    resetState();
    updateDisplay(INITIAL_DISPLAY_VALUE);
    clearOperationIndicator();
}

// Handles toggle sign button click (+/-)
function handleToggleSign(): void {
    const state = getState();
    const currentNumber = parseFloat(state.currentValue);
    
    if (!isValidNumber(state.currentValue)) {
        return;
    }
    
    const toggledNumber = toggleNumberSign(currentNumber);
    const toggledString = toggledNumber.toString();
    
    setState({ currentValue: toggledString });
    updateDisplay(toggledString);
}

// Handles percentage button click (%)
function handlePercentage(): void {
    const state = getState();
    const currentNumber = parseFloat(state.currentValue);
    
    if (!isValidNumber(state.currentValue)) {
        return;
    }
    
    const percentageValue = convertToPercentage(currentNumber);
    const percentageString = percentageValue.toString();
    
    setState({ currentValue: percentageString });
    updateDisplay(percentageString);
}

export {
    handleNumberInput,
    handleDecimalInput,
    handleOperatorInput,
    handleEqualsInput,
    handleClear,
    handleToggleSign,
    handlePercentage
};
