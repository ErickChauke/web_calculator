// Main calculator application entry point
// Initializes the calculator and sets up event listeners

import {
    handleNumberInput,
    handleDecimalInput,
    handleOperatorInput,
    handleEqualsInput,
    handleClear,
    handleToggleSign,
    handlePercentage
} from './handlers.js';


// Initializes the calculator application
function initializeCalculator(): void {
    setupButtonEventListeners();
}

// Sets up event listeners for all calculator buttons
function setupButtonEventListeners(): void {
    const allButtons = document.querySelectorAll('.button');
    
    allButtons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });
}

// Handles click events for calculator buttons
function handleButtonClick(event: Event): void {
    const button = event.currentTarget as HTMLButtonElement;
    const action = button.getAttribute('data-action');
    const value = button.getAttribute('data-value');
    
    // Handle number buttons (0-9)
    if (value !== null && value !== DECIMAL_POINT) {
        handleNumberInput(value);
        return;
    }
    
    // Handle decimal point button
    if (value === DECIMAL_POINT) {
        handleDecimalInput();
        return;
    }
    
    // Handle action buttons
    if (action !== null) {
        processAction(action);
    }
}

// Processes action button clicks based on the action type
function processAction(action: string): void {
    switch (action) {
        case 'clear':
            handleClear();
            break;
        case 'toggle-sign':
            handleToggleSign();
            break;
        case 'percentage':
            handlePercentage();
            break;
        case 'add':
            handleOperatorInput('add');
            break;
        case 'subtract':
            handleOperatorInput('subtract');
            break;
        case 'multiply':
            handleOperatorInput('multiply');
            break;
        case 'divide':
            handleOperatorInput('divide');
            break;
        case 'equals':
            handleEqualsInput();
            break;
        default:
            break;
    }
}

// Constant for decimal point character
const DECIMAL_POINT: string = '.';

// Start the application when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalculator);
} else {
    initializeCalculator();
}
