'use strict';

class Account {
  // Public Fields
  language = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public Methods (Public APIs)
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }
  getMovements() {
    return this.#movements;
  }

  // Private Method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('David', 'EUR', 1234);
acc1.deposit(134);
acc1.deposit(450);
acc1.deposit(645);
acc1.deposit(981);

acc1.requestLoan(599);

console.log(acc1.getMovements());
