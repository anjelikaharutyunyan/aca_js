class Person {
    constructor(firstName, lastName, age, gender) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    toString() {
        return `${this._firstName} ${this._lastName} - ${this._age}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, gender, program, year, fee) {
        super(firstName, lastName, age, gender);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get program() {
        return this._program;
    }

    set program(program) {
        this._program = program;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        this._year = year;
    }

    get fee() {
        return this._fee;
    }

    set fee(fee) {
        this._fee = fee;
    }

    passExam(programName, grade) {
        const programIndex = this._program.findIndex(prog => prog.programName === programName);
        if (programIndex !== -1) {
            this._program[programIndex].grade = grade;
            const passedAllExams = this._program.every(prog => prog.grade >= 50);
            if (passedAllExams) {
                this._year++;
            }
        }
    }

    toString() {
        return `${super.toString()} - Year: ${this._year}, Fee: ${this._fee}`;
    }
}

const person = new Person('Michael', 'Doe', 25, 'Male');
const student = new Student('Angelica', 'Harutyunyan', 20, 'Female', [{ programName: 'Math', grade: 75 }], 1, 1000);
student.program = [{ programName: 'Science', grade: 80 }];
console.log(student.year);
console.log(student.program);
student.passExam('Science', 90);
console.log(student.program);
console.log(student.year);
