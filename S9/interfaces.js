var thomas = {
    id: 235235,
    first: "Thomas",
    last: "Hardy",
    nickname: "gg",
    sayHi: function () {
        return "Hello!";
    },
    sayBye: function () {
        return "bye";
    }
};
var shoes = {
    name: "Blue Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
