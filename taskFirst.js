function Author(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
}

Object.defineProperty(Author.prototype, 'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
        this._name = name;
    }
});

Object.defineProperty(Author.prototype, 'email', {
    get: function() {
        return this._email;
    },
    set: function(email) {
        this._email = email;
    }
});

Object.defineProperty(Author.prototype, 'gender', {
    get: function() {
        return this._gender;
    },
    set: function(gender) {
        this._gender = gender;
    }
});

Author.prototype.toString = function() {
    return `${this.name} - ${this.email}`;
};

function Book(title, author, price, quantity) {
    Author.call(this, author.name, author.email, author.gender);
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.author = author;
}

Book.prototype = Object.create(Author.prototype);

Object.defineProperty(Book.prototype, 'title', {
    get: function() {
        return this._title;
    },
    set: function(title) {
        this._title = title;
    }
});

Object.defineProperty(Book.prototype, 'price', {
    get: function() {
        return this._price;
    },
    set: function(price) {
        this._price = price;
    }
});

Object.defineProperty(Book.prototype, 'quantity', {
    get: function() {
        return this._quantity;
    },
    set: function(quantity) {
        this._quantity = quantity;
    }
});

Book.prototype.getProfit = function() {
    return this.price * this.quantity;
};

Book.prototype.toString = function() {
    return `${this.title} by ${this.author.name} - Price: ${this.price}, Quantity: ${this.quantity}`;
};

const author = new Author('Jack London', 'jacklondon@gmail.com', 'Male');
const book = new Book('Martin Iden', author, 20.99, 100);

console.log(author.name);
console.log(author.email);
console.log(author.gender);
console.log(author.toString());

console.log(book.title);
console.log(book.author.name);
console.log(book.price);
console.log(book.quantity);
console.log(book.getProfit());
console.log(book.toString());
