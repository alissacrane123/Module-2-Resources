import Dog from './dog.js'

class App {
  constructor(shelter, user) {
		this.shelter = shelter;
		this.user = user;
		this.currentTab = 'shelter'

		this.switchTab = this.switchTab.bind(this);
		this.addAnimal = this.addAnimal.bind(this);
		this.adoptAnimal = this.adoptAnimal.bind(this);
		this.giveUpAnimal = this.giveUpAnimal.bind(this);
    this.registerListeners();
  }

  registerListeners() {
    let userTab = document.getElementById("user-tab");
    let shelterTab = document.getElementById("shelter-tab");
    let formTab = document.getElementById("form-tab");

    userTab.addEventListener('click', () => this.switchTab('user'))
    shelterTab.addEventListener('click', () => this.switchTab('shelter'));
		formTab.addEventListener('click', () => this.switchTab('form'));
		
		let form  = document.getElementById('animal-form');
		form.addEventListener('submit', this.addAnimal);

		let shelterList = document.getElementById('shelter-animal-list');
		shelterList.addEventListener('click', this.adoptAnimal)

		let userList = document.getElementById('user-animal-list');
		userList.addEventListener('click', this.giveUpAnimal)
	}

	
	switchTab(newTab) {
    // for style
		let prevButton = document.getElementById(`${this.currentTab}-tab`);
		let newButton = document.getElementById(`${newTab}-tab`);
		prevButton.classList.remove("active");
		newButton.classList.add("active");
		
    let prevContainer = document.getElementById(this.currentTab);
    prevContainer.classList.add("hide");
    let newContainer = document.getElementById(newTab);
    newContainer.classList.remove("hide");
    this.currentTab = newTab;
  }

	addAnimal(event) {
		event.preventDefault();
		let name = document.getElementById('animal-name');
		let age = document.getElementById('animal-age');
		let breed = document.getElementById('animal-breed');

		let newAnimal = new Dog(name.value, age.value, breed.value);
		this.shelter.receiveAnimal(newAnimal);

		name.value = '';
		age.value = '';
		breed.value = '';

		this.switchTab('shelter');
	}


	adoptAnimal(event) {
		if (event.target.className === "adopt") {
      let animalName = event.target.id.split('-')[1];
      let animal = this.shelter.removeAnimal(animalName);
      this.user.adoptPet(animal);
		}
		
		this.switchTab('user')
	}

	giveUpAnimal(event) {
		if (event.target.className === "give-up") {
      let animalName = event.target.id.split('-')[2];
      let animal = this.user.giveUpPet(animalName);
      this.shelter.receiveAnimal(animal);
		}
		
		this.switchTab('shelter')
	}
}

export default App;
