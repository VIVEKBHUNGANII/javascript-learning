// statics methods and properties
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  static info() {
    return `this is info`;
  }
  static desc = "static propertie";

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
  eat() {
    return `${this.firstname} is not eat`;
  }
}

const Person1 = new Person("vivek", "patel", 20);
console.log(Person1.eat());
// uper ni method person1 name no object j call kari sake

console.log(Person.info());
// static direct class sathe releted hoy atale tene object (person1) call na kari sake

console.log(Person.desc);
