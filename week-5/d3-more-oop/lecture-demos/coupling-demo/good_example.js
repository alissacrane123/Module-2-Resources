class User {
  constructor(name, age, address, imageUrl) {
    this.name = name;
    this.age = age;
    this.profile = new Profile(address, imageUrl);
  }

  updateAddress(newAddress) {
		// this fixes the issue 
		// - only chaining one dot (excluding the dot after `this`)
		// - the User class doesnt care about how the Address class
		//   updates the address, it only cares that the address gets 
		//   updated 
		this.profile.updateProfileAddress(newAddress);
		// document.getElementById(id).appendChild()
	}
	
	getZipCode() {
		// this.profile.adddress.zipcodewoo
		this.profile.getAddressZip()
	}
}

class Profile {
  constructor(address, imageUrl) {
    this.address = new Address(address);
    this.imageUrl = imageUrl;
  }

  updateProfileAddress(newAddress) {
    this.address.update(newAddress);
	}

	getAddressZip() {
		return this.address.zipcode
	}
}

class Address {
  constructor(address) {
		this.street = address.street;
		this.city = adddress.city;
    this.zipcode = address.zipcode;
  }

  update(newAddress) {
		this.street = newAddress.street;
		this.city = adddress.city;
    this.zipcode = newAddress.zipcode;
    return this;
  }

}
