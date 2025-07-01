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
        
        // Replace newlines with commas to handle both delimiters
        const normalizedNumbers = numbers.replace(/\n/g, ",");
        
        // Split by comma and sum all numbers
        const parts = normalizedNumbers.split(",");
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