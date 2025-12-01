// Type definitions for calculator application

// Represents the mathematical operations the calculator can perform
type OperationType = 'add' | 'subtract' | 'multiply' | 'divide' | null;

// Represents the current state of the calculator
interface CalculatorState {
    currentValue: string;
    previousValue: string;
    operation: OperationType;
    shouldResetDisplay: boolean;
}

export type { OperationType, CalculatorState };
