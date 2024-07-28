// Basic class declaration
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

let dog = new Animal("Dog");
//dog.name = "Dog";
dog.speak();

// Inheritance

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

let myDog = new Dog("Buddy", "Labrador");
myDog.bark();
myDog.speak();


// Getters and setters
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.radius); // 5
circle.radius = 10;
console.log(circle.area);

// Static methods

class MathOperations {
    static PI = 3.14159;

    static square(x) {
        return x * x;
    }
}

console.log(MathOperations.PI); // 3.14159
console.log(MathOperations.square(4)); // 16



class BankAccount {
    #balance = 0;  // Private field
    #transactions = [];

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // Getter
    get balance() {
        return this.#balance;
    }

    // Method
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#transactions.push({ type: 'deposit', amount, date: new Date() });
            return true;
        }
        return false;
    }

    // Method with validation
  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      this.#transactions.push({ type: 'withdrawal', amount, date: new Date() });
      return true;
    }
    return false;
  }

  // Method returning a new object
  getAccountSummary() {
    return {
      owner: this.owner,
      balance: this.#balance,
      transactionCount: this.#transactions.length
    };
  }

  // Static method
  static transferMoney(fromAccount, toAccount, amount) {
    if (fromAccount.withdraw(amount)) {
      toAccount.deposit(amount);
      return true;
    }
    return false;
  }
}

// Factory function for creating accounts
function createSavingsAccount(owner, initialBalance, interestRate) {
    const account = new BankAccount(owner, initialBalance);
    
    // Adding a method to the object
    account.addInterest = function() {
      const interest = this.balance * interestRate;
      this.deposit(interest);
      return interest;
    };
  
    return account;
}

var obj = new BankAccount("ABC", 1000)
console.log(obj.balance)

const account1 = new BankAccount("Alice", 1000);
const account2 = createSavingsAccount("Bob", 500, 0.05);

account1.deposit(500);
account2.deposit(1000);
account2.addInterest();

console.log(account1.getAccountSummary());
console.log(account2.getAccountSummary());


BankAccount.transferMoney(account1, account2, 200);

console.log(account1.balance);
console.log(account2.balance);