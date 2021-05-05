class Student {
    student_name: string = '';
    student_age: number = 0;
    height: number = 0;
    constructor(name: string, age: number, height: number) {
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
    color: string = '';
    width: string = '';
    height: string = '';
}

let student1 = new Student('Amila', 30, 50);
student1.run();
student1.jump();
let student2 = new Student('Pulasthi', 25, 50);

console.log(student1);
console.log(student2);




