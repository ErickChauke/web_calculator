// Display helper functions for showing operations
// Provides visual feedback for the current operation

import type { OperationType } from './types.js';

// Maps operation types to their display symbols
function getOperationSymbol(operation: OperationType): string {
    switch (operation) {
        case 'add':
            return '+';
        case 'subtract':
            return '−';
        case 'multiply':
            return '×';
        case 'divide':
            return '÷';
        default:
            return '';
    }
}

// Updates the operation indicator display
function updateOperationIndicator(operation: OperationType, previousValue: string): void {
    const indicatorElement = document.getElementById('operation-indicator');
    
    if (!indicatorElement) {
        return;
    }
    
    if (operation === null || previousValue === '') {
        indicatorElement.textContent = '';
        return;
    }
    
    const symbol = getOperationSymbol(operation);
    indicatorElement.textContent = `${previousValue} ${symbol}`;
}

// Clears the operation indicator
function clearOperationIndicator(): void {
    const indicatorElement = document.getElementById('operation-indicator');
    
    if (indicatorElement) {
        indicatorElement.textContent = '';
    }
}

export { updateOperationIndicator, clearOperationIndicator };
