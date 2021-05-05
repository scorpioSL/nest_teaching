var Student = /** @class */ (function () {
    function Student(name, age, height) {
        this.student_name = '';
        this.student_age = 0;
        this.height = 0;
        this.student_name = name;
        this.student_age = age;
        this.height = height;
    }
    Student.prototype.run = function () {
        console.log("Running " + this.student_name);
    };
    Student.prototype.jump = function () {
        console.log("Jumping " + this.student_name);
    };
    return Student;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.color = '';
        this.width = '';
        this.height = '';
    }
    return Vehicle;
}());
var student1 = new Student('Amila', 30, 50);
student1.run();
student1.jump();
var student2 = new Student('Pulasthi', 25, 50);
console.log(student1);
console.log(student2);
