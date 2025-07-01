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

    describe('TDD Step 4: Multiple Numbers Support', () => {
        test('should return sum of multiple comma-separated numbers', () => {
            // Arrange
            const input = "1,2,3,4";
            const expected = 10;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });

        test('should handle various multiple number combinations', () => {
            expect(calculator.add("1,2,3")).toBe(6);
            expect(calculator.add("5,10,15,20")).toBe(50);
            expect(calculator.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
            expect(calculator.add("0,1,2,3,4")).toBe(10);
            expect(calculator.add("100,200,300")).toBe(600);
        });
    });

    describe('TDD Step 5: Newline Delimiter Support', () => {
        test('should handle newlines as delimiters', () => {
            // Arrange
            const input = "1\n2,3";
            const expected = 6;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });

        test('should handle various newline delimiter combinations', () => {
            expect(calculator.add("1\n2")).toBe(3);
            expect(calculator.add("1\n2\n3")).toBe(6);
            expect(calculator.add("10\n20,30")).toBe(60);
            expect(calculator.add("5,10\n15,20")).toBe(50);
            expect(calculator.add("1\n2\n3\n4\n5")).toBe(15);
        });
    });

    describe('TDD Step 6: Custom Delimiters Support', () => {
        test('should handle custom delimiters', () => {
            // Arrange
            const input = "//;\n1;2";
            const expected = 3;

            // Act
            const result = calculator.add(input);

            // Assert
            expect(result).toBe(expected);
        });

        test('should handle various custom delimiters', () => {
            expect(calculator.add("//|\n1|2|3")).toBe(6);
            expect(calculator.add("//:\n5:10:15")).toBe(30);
            expect(calculator.add("//*\n1*2*3*4")).toBe(10);
            expect(calculator.add("//&\n100&200")).toBe(300);
            expect(calculator.add("//#\n7#8#9")).toBe(24);
        });
    });
}); 