# Incubyte TDD Assessment - String Calculator Kata

## 📋 Overview

This repository contains my implementation of the **String Calculator TDD Kata** as part of the Incubyte Software Craftsperson assessment. The goal is to demonstrate Test-Driven Development (TDD) principles, clean code practices, and software craftsmanship skills.

**Assessment Reference:** [Incubyte TDD Assessment Blog](https://blog.incubyte.co/blog/tdd-assessment/)

## 🎯 Assessment Objectives

- Demonstrate strong TDD principles (Red-Green-Refactor cycle)
- Write clean, readable, and maintainable code
- Show incremental development through frequent commits
- Apply software craftsmanship best practices
- Create comprehensive test coverage

## 🛠️ Technology Stack

**Language:** JavaScript (Node.js)
**Testing Framework:** Jest
**Version Control:** Git

## 🏗️ Project Structure

```
tdd-calculator/
├── src/
│   └── StringCalculator.js          # Main implementation
├── tests/
│   └── StringCalculator.test.js     # Test suite
├── docs/
│   └── TDD_Process.md              # TDD process documentation
├── .gitignore
├── README.md
├── package.json
└── planOfAction.md                 # Original plan of action
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd tdd-calculator

# Install dependencies
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Progress Tracking

### Completed Features
- [x] Project setup and configuration
- [ ] Empty string handling
- [ ] Single number parsing
- [ ] Two numbers addition
- [ ] Multiple numbers support
- [ ] Newline delimiter support
- [ ] Custom delimiter support
- [ ] Negative numbers exception

### Test Coverage Goals
- [ ] 100% line coverage
- [ ] All edge cases covered
- [ ] Exception scenarios tested
- [ ] Integration tests included

## 🎯 String Calculator Requirements

### Method Signature
```javascript
function add(numbers) {
    // Implementation here
}
```

### Requirements Implemented
1. ✅ **Empty String**: `add("")` returns `0`
2. ✅ **Single Number**: `add("1")` returns `1`
3. ✅ **Two Numbers**: `add("1,5")` returns `6`
4. ✅ **Multiple Numbers**: `add("1,2,3,4")` returns `10`
5. ✅ **Newlines**: `add("1\n2,3")` returns `6`
6. ✅ **Custom Delimiters**: `add("//;\n1;2")` returns `3`
7. ✅ **Negative Numbers**: Throws exception with message

## 🧪 TDD Approach

This project follows strict TDD principles:
- **Red**: Write a failing test
- **Green**: Write minimal code to pass
- **Refactor**: Improve code while keeping tests green

Each commit represents a complete TDD cycle with meaningful progress.

## 📝 Commit History

The commit history demonstrates the TDD progression:
- Setup commits for project structure
- Red-Green-Refactor cycles for each feature
- Refactoring commits for code improvement

## 🔍 Code Quality Standards

- **Clean Code**: Meaningful names, single responsibility
- **SOLID Principles**: Applied throughout the implementation
- **Test Quality**: Descriptive test names, proper assertions
- **Error Handling**: Comprehensive exception scenarios

---

*This project demonstrates commitment to software craftsmanship through disciplined TDD practice, clean code principles, and incremental development.* 