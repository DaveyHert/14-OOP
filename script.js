'use strict';

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  this.age = 2021 - this.birthYear;
};
console.log(Person.prototype.constructor.name);
const patrick = new Person('Patrick', 1993);
patrick.calcAge();
console.log(patrick);

// Inheritance
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor.name);
Student.prototype.intro = function () {
  console.log(
    `Hello, My name is ${this.firstName}, a ${this.age} years old ${this.course} student.`
  );
};

const jaja = new Student('Jaja', 2001, 'Computer Science');
jaja.calcAge();
console.log(jaja);
jaja.intro();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    this.age = 2021 - this.birthYear;
  }
}

console.log(PersonCl.prototype.constructor.name);
const moyin = new PersonCl('Moyin', 1999);
moyin.calcAge();
console.log(moyin);

// Inheritance
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  intro() {
    console.log(
      `Hello, My name is ${this.firstName}, a ${this.age} years old ${this.course} student.`
    );
  }
}

console.log(StudentCl.prototype.constructor.name);
const mijaan = new StudentCl('Mijaan', 2000, 'Computer Science');
mijaan.calcAge();
console.log(mijaan);
mijaan.intro();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    this.age = 2021 - this.birthYear;
  },
};
console.log(PersonProto.constructor.name);

const sammy = Object.create(PersonProto);
sammy.init('Sammy', 1999);
sammy.calcAge();
console.log(sammy);

// Inheritance
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.intro = function () {
  console.log(
    `Hello, My name is ${this.firstName}, a ${this.age} years old ${this.course} student.`
  );
};

console.log(StudentProto.constructor.name);
const dave = Object.create(StudentProto);
dave.init('David', 1998, 'Computer Science');
dave.calcAge();
console.log(dave);
dave.intro();
