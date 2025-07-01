/**
 * String Calculator - TDD Kata Implementation
 * 
 * This module implements a string calculator that can add numbers
 * provided as a string with various delimiters.
 */

class StringCalculator {
    /**
     * Adds numbers from a string input
     * @param {string} numbers - String containing numbers to add
     * @returns {number} Sum of the numbers
     */
    add(numbers) {
        // Handle empty string case
        if (numbers === "") {
            return 0;
        }
        
        // Split by comma and sum all numbers
        const parts = numbers.split(",");
        let sum = 0;
        
        for (const part of parts) {
            const num = parseInt(part.trim());
            if (!isNaN(num)) {
                sum += num;
            }
        }
        
        return sum;
    }
}

module.exports = StringCalculator; 