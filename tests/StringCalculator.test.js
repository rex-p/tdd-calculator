/**
 * String Calculator Test Suite
 * 
 * Test cases for the String Calculator TDD Kata
 * Following the Red-Green-Refactor TDD approach
 */

const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    describe('TDD Step 1: Empty String Test Case', () => {
        test('should return 0 for empty string', () => {
            // Arrange
            const input = "";
            const expected = 0;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });
    });

    describe('TDD Step 2: Single Number Test Case', () => {
        test('should return the number itself for single number', () => {
            // Arrange
            const input = "1";
            const expected = 1;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });

        test('should handle different single numbers', () => {
            expect(calculator.add("5")).toBe(5);
            expect(calculator.add("42")).toBe(42);
            expect(calculator.add("0")).toBe(0);
        });
    });

    describe('TDD Step 3: Two Numbers Test Case', () => {
        test('should return sum of two comma-separated numbers', () => {
            // Arrange
            const input = "1,5";
            const expected = 6;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });

        test('should handle different two number combinations', () => {
            expect(calculator.add("2,3")).toBe(5);
            expect(calculator.add("10,15")).toBe(25);
            expect(calculator.add("0,7")).toBe(7);
            expect(calculator.add("100,200")).toBe(300);
        });
    });
}); 