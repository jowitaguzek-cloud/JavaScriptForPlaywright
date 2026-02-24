class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  hello() {
    console.log(`Hello, my name is ${this.name} ${this.surname}, I'm ${this.age} years old.`);
  }
}

// Dziedziczenie - klasa
class Student extends Person {
  constructor(name, surname, age, fieldOfStudy) {
    super(name, surname, age); // wywołanie konstruktora rodzica
    this.fieldOfStudy = fieldOfStudy;
  }

  study() {
    console.log(`${this.name} studies ${this.fieldOfStudy}.`);
  }
}

// Creating objects
const person1 = new Student("Anna", "Johnes", 27, "veterinary medicine");
const person2 = new Student("Stephen", "Ford", 23, "law");
const person3 = new Person("Zelda", "Forest", 11);

// Using class methods
person1.hello();
person1.study();
person2.hello();
person2.study();
person3.hello();
