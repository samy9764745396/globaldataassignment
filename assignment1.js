//   Exercise 1:
// 1. Create a reference type called Person.  
//    Populate the Person class with the following properties to store the following information in database:
// 		First name
// 		Last name
// 		Email address
// 		Date of birth
// 2. Add constructors that accept the following parameter lists:
// 		All four parameters
// 		First, Last, Email
// 		First, Last, Date of birth

// 3. Add read-only properties that return the following computed information:
// 		Adult - whether or not the person is over 18
// 		Birthday - whether or not today is the person's birthday 


class Person {
	constructor(firstName, lastName, email, dateOfBirth) {      // 1
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.dateOfBirth = dateOfBirth
	}
	//...............................................................................................

	constructor(firstName, lastName, email) {                    // 2
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
	}

	constructor(firstName, lastName, dateOfBirth) {             //2
		this.firstName = firstName
		this.lastName = lastName
		this.dateOfBirth = dateOfBirth
	}
	
	//.............................................................................................................
	get adult() {                                     //3
		let today = new Date()
		let age = today.getFullYear() - this.dateOfBirth.getFullYear()
		return age
	}

	get birthday() {
		let today = new Date()
		return (today.getMonth() === this.dateOfBirth.getMonth() &&
			today.getDate() === this.dateOfBirth.getDate()
		)
	}

}
//.............................................................................................................................
// Below code is for testing purpose before checking first comment above two constructors as in one class only one 
// constructor can be used

const person = new Person("Sayam", "Pawar", "samapawar159@gmail.com", new Date("2000-1-20") )
console.log(person.adult)
console.log(person.birthday)   
