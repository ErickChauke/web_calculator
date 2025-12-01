// Calculator state management
// Maintains the current state of the calculator

import type { CalculatorState } from './types.js';
import { INITIAL_DISPLAY_VALUE } from './constants.js';

// The current state of the calculator
let calculatorState: CalculatorState = {
    currentValue: INITIAL_DISPLAY_VALUE,
    previousValue: '',
    operation: null,
    shouldResetDisplay: false
};

// Retrieves the current calculator state
function getState(): CalculatorState {
    return calculatorState;
}

// Updates the calculator state with new values
function setState(newState: Partial<CalculatorState>): void {
    calculatorState = { ...calculatorState, ...newState };
}

// Resets the calculator state to initial values
function resetState(): void {
    calculatorState = {
        currentValue: INITIAL_DISPLAY_VALUE,
        previousValue: '',
        operation: null,
        shouldResetDisplay: false
    };
}

export { getState, setState, resetState };
