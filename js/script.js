var iPhone6S = new Phone('iPhone6S', 2250, 'silver'),
		SamsungGalaxyS6 = new Phone('Samsung Galaxy S6', 2300, 'white'),
		OnePlusOne = new Phone('OnePlus One', 1949, 'black');

var newElemNumber = 0,
		isNewElemAdded = false;

// constructor
function Phone(brand, price, color) {
	this.brand = [brand];
	this.price = [price];
	this.color = [color];
}

// new methods for Phone constructor
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
	division('space');
}

Phone.prototype.showAllProperties = function() {
	var properties = Object.keys(this),
			values = Object.values(this),
			length = properties.length;

	if (isNewElemAdded == true) {
		this.markNewElements(length);
		isNewElemAdded = false;
	}

	console.log(values[0] + ':');
	
	for (i=1; i < length; i++) {
		console.log('- ' + properties[i] + ': ' + values[i].join(' '));
	}
	division('space');

	newElemNumber = 0;
}

Phone.prototype.addNewProperty = function(name, value) {
	this[name] = value;
	newElemNumber++;
	isNewElemAdded = true;
}

Phone.prototype.markNewElements = function (newLength) {
	values = Object.values(this);

	// clear tag [new] from all properties
	for (i=0; i < newLength; i++) {
		values[i].splice(1);
	}

	// add tag [new] to added properties
	for (i=newLength - newElemNumber; i < newLength; i++) {
		values[i].push('[new]');
	}
}

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

division('line');

iPhone6S.showAllProperties();
SamsungGalaxyS6.showAllProperties();
OnePlusOne.showAllProperties();

iPhone6S.addNewProperty('battery', ['2800mAh']);
iPhone6S.addNewProperty('warranty', ['2 years']);
iPhone6S.showAllProperties();


iPhone6S.addNewProperty('weight', ['168 grams']);
iPhone6S.showAllProperties();

OnePlusOne.addNewProperty('weight', ['200 grams']);
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