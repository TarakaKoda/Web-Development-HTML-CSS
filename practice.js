function isOval(sentence) {
    let newList = sentence.split(" ");
    newList.forEach(element => {
        if (!['a', 'e', 'i', 'o', 'u'].includes(element[0].toLowerCase())) {
            console.log(element);
        }
    });
}

const sentence = 'Albus Dumbledore founded the Order of the Phoenix';


class Person {
constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

const employee = new Person('taraka', 'koda');

console.log(employee.firstName);

employee.fullName = "srinivas koda"
console.log(employee.fullName);

const newFun = () => {
    
}










