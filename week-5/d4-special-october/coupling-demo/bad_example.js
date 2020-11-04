class User {
	constructor(name, age, address, imageUrl) {
		this.name = name;
		this.age = age;
		this.profile = new Profile(address, imageUrl)
	}

	updateAddress(address) {
		// this violates the law of demeter
		// 1. we've chained two dots (excluding the dot after `this`)
		// 2. the User class must be aware of the inner workings
		//    of the Address class in order to update an address
		this.profile.address.update(address)
		// let newAddress = this.profile.address;
		// newAddress.update(address)
	}
}


class Profile {
	constructor(address, imageUrl) {
		this.address = new Address(address);
		this.imageUrl = imageUrl;
	}
}


class Address {
	constructor(address) {
		this.street = address.street;
		this.zipcode = address.zipcode
	}

	update(newAddress) {
		this.street = newAddress.street;
		this.zipcode = newAddress.zipcode;
		return this
	}
}



