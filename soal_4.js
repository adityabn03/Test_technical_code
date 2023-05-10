// Contoh kelas Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Contoh metode
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Contoh subclass dari Person
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    // Override metode introduce dari parent class
    introduce() {
      console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }
  
    // Contoh metode baru untuk subclass Student
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  // Contoh penggunaan kelas Person dan subclass Student
  const person1 = new Person("John", 30);
  person1.introduce(); // output: Hi, my name is John and I am 30 years old.
  
  const student1 = new Student("Jane", 17, 11);
  student1.introduce(); // output: Hi, my name is Jane, I am 17 years old, and I am in grade 11.
  student1.study(); // output: Jane is studying.
  