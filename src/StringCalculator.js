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
        
        const { delimiter, numbersToProcess } = this._parseDelimiterAndNumbers(numbers);
        const normalizedNumbers = numbersToProcess.replace(/\n/g, delimiter);
        
        return this._sumNumbers(normalizedNumbers.split(delimiter));
    }

    /**
     * Parses the input to extract custom delimiter and numbers to process
     * @param {string} numbers - Input string
     * @returns {object} Object containing delimiter and numbersToProcess
     * @private
     */
    _parseDelimiterAndNumbers(numbers) {
        let delimiter = ",";
        let numbersToProcess = numbers;
        
        // Check for custom delimiter format: //[delimiter]\n[numbers...]
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            if (delimiterEndIndex !== -1) {
                delimiter = numbers.substring(2, delimiterEndIndex);
                numbersToProcess = numbers.substring(delimiterEndIndex + 1);
            }
        }
        
        return { delimiter, numbersToProcess };
    }

    /**
     * Sums an array of number strings
     * @param {string[]} parts - Array of number strings
     * @returns {number} Sum of valid numbers
     * @private
     */
    _sumNumbers(parts) {
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