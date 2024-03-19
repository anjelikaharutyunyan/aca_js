class Account {
    constructor(id, name, balance) {
        this._id = id
        this._name = name
        this._balance = balance
    }
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }

    get balance() {
        return this._balance
    }
    set balance(balance) {
        this._balance = balance
    }

    credit(amount) {
        this._balance += + amount
        return this._balance
    }

    debit(amount) {
        if (amount <= this._balance) {
            this._balance -= amount
            return this._balance
        }
        else {
            console.log("Amount exceeded balance.")
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount <= this.balance) {
            this._balance -= amount;
            anotherAccount.credit(amount)
            return this._balance
        }
        else {
            console.log("Amount exceeded balance.")
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance;
    }

    toString() {
        return `Account ID: ${this._id}, Name: ${this._name}, Balance: ${this._balance}`;
    }
}

const account1 = new Account(1, 'Angelica', 10000);
const account2 = new Account(2, 'John', 5000);

console.log(account1.toString());
console.log(account2.toString());

account1.credit(500);
console.log(account1.balance);

account2.debit(1000);
console.log(account2.balance); 

account1.transferTo(account2, 200);
console.log(account1.balance); 
console.log(account2.balance); 

console.log(Account.identifyAccounts(account1, account2));