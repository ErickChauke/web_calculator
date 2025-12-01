// Display formatting and update functions
// Handles how numbers are formatted and shown to the user

import { MAXIMUM_DISPLAY_DIGITS, DECIMAL_POINT } from './constants.js';

// Formats a number for display, limiting digits and handling decimals
function formatDisplayValue(value: string): string {
    // Remove leading zeros unless it is a decimal number
    if (value.length > 1 && value[0] === '0' && value[1] !== DECIMAL_POINT) {
        return value.substring(1);
    }
    
    // Limit the total number of digits displayed
    if (value.length > MAXIMUM_DISPLAY_DIGITS) {
        return value.substring(0, MAXIMUM_DISPLAY_DIGITS);
    }
    
    return value;
}

// Updates the calculator display element with a new value
function updateDisplay(value: string): void {
    const displayElement = document.getElementById('display');
    
    if (displayElement) {
        const formattedValue = formatDisplayValue(value);
        displayElement.textContent = formattedValue;
    }
}

// Checks if a string can be converted to a valid number
function isValidNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}

export { formatDisplayValue, updateDisplay, isValidNumber };
