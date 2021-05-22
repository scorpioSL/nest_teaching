"use strict";
class Student {
    constructor(name, age, height) {
        this.student_name = '';
        this.student_age = 0;
        this.height = 0;
        this.student_name = name;
        this.student_age = age;
        this.height = height;
    }
    run() {
        console.log(`Running ${this.student_name}`);
    }
    jump() {
        console.log(`Jumping ${this.student_name}`);
    }
}
class Vehicle {
    constructor() {
        this.color = '';
        this.width = '';
        this.height = '';
    }
}
let student1 = new Student('Amila', 30, 50);
student1.run();
student1.jump();
let student2 = new Student('Pulasthi', 25, 50);
console.log(student1);
console.log(student2);
