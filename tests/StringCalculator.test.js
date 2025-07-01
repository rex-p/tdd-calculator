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
}); 