// Created By: Jacob Bonner
// Created On: December 2020
// This class creates an integer stack.

class JacobStack {
  // Constructor that defines stack array
  constructor() {
    this.STACK_AS_ARRAY = [];
  }

  // Method that adds user input to stack
  pushNumber(inputNumber) {
    this.STACK_AS_ARRAY.push(inputNumber);
  }

  // Getter that tells the user the most recent input
  getPushedNumber() {
    return this.STACK_AS_ARRAY[this.STACK_AS_ARRAY.length - 1];
  }
}

// Exporting the class
module.exports = JacobStack;
