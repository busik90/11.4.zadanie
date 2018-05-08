function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
	division('space');
}

Phone.prototype.showAllProperties = function() {
	var properties = Object.keys(this),
			values = Object.values(this);

	console.log(values[0] + ':');
	
	for (i=1; i < properties.length; i++) {
		console.log('- ' + properties[i] + ': ' + values[i]);
	}
	division('space');
}

var iPhone6S = new Phone('iPhone6S', 2250, 'silver'),
		SamsungGalaxyS6 = new Phone('Samsung Galaxy S6', 2300, 'white'),
		OnePlusOne = new Phone('OnePlus One', 1949, 'black');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

division('line');

iPhone6S.showAllProperties();
SamsungGalaxyS6.showAllProperties();
OnePlusOne.showAllProperties();


function division(type) {
	switch(type) {
		case 'space':
			console.log('');
			break;
		case 'line':
			console.log('-----------------------------');
			break;
	}
}