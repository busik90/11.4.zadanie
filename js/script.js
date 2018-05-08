function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

var iPhone6S = new Phone('Apple', 2250, 'silver'),
		SamsungGalaxyS6 = new Phone('Samsung Galaxy S6', 2300, 'white'),
		OnePlusOne = new Phone('OnePlus One', 1949, 'black');

iPhone6S.printInfo();