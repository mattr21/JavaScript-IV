// CODE here for your Lambda Classes

// =================================== Classes ===================================

// === Base-class: Person ===
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

// === Class: Instructor ===
class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs)
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

// === Class: Student ===
class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;                    
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

// === Class: Project Manager ===
class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// =================================== Objects ===================================

// === Objects: Students ===
const matt = new Student({
    name: 'Matt',
    location: 'Torrance',
    age: 30,
    gender: 'male',
    previousBackground: 'marketing',
    className: 'WEB17',
    favSubjects: ['HTML', 'CSS', 'JS']
})

console.log(matt.name);
console.log(matt.location);
console.log(matt.age);
console.log(matt.gender);
console.log(matt.previousBackground);
console.log(matt.className);
console.log(matt.favSubjects);
console.log(matt.speak());
console.log(matt.listsSubjects());
console.log(matt.PRAssignment("JSIV"));
console.log(matt.sprintChallenge("javascript fundamentals"));

const paige = new Student({
    name: 'Paige',
    location: 'Wilmington',
    age: 22,
    gender: 'female',
    previousBackground: 'data entry',
    className: 'CS2',
    favSubjects: ['Python', 'C#']
})

console.log(paige.name);
console.log(paige.location);
console.log(paige.age);
console.log(paige.gender);
console.log(paige.previousBackground);
console.log(paige.className);
console.log(paige.favSubjects);
console.log(paige.speak());
console.log(paige.listsSubjects());
console.log(paige.PRAssignment("CSDE2"));
console.log(paige.sprintChallenge("CS"));

// === Objects: Instructors ===
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

console.log(fred.name);
console.log(fred.location);
console.log(fred.age);
console.log(fred.gender);
console.log(fred.favLanguage);
console.log(fred.specialty);
console.log(fred.catchPhrase);
console.log(fred.speak());
console.log(fred.demo("CSS"));
console.log(fred.grade(matt, "CSS"));

const corey = new Instructor({
    name: 'Corey',
    location: 'Washington',
    age: 31,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Data',
    catchPhrase: `Waaaduuuup!`
});

console.log(corey.name);
console.log(corey.location);
console.log(corey.age);
console.log(corey.gender);
console.log(corey.favLanguage);
console.log(corey.specialty);
console.log(corey.catchPhrase);
console.log(corey.speak());
console.log(corey.demo("HTML"));
console.log(corey.grade(paige, "HTML"));

// === Objects: Project Managers ===
const michael = new ProjectManager({
    name: 'Michael',
    location: 'the east coast',
    age: 25,
    gender: 'male',
    gradClassName: 'WEB14',
    favInstructor: 'Josh'
})

console.log(michael.name);
console.log(michael.location);
console.log(michael.age);
console.log(michael.gender);
console.log(michael.gradClassName);
console.log(michael.favInstructor);
console.log(michael.speak());
console.log(michael.standUp("WEB17"));
console.log(michael.debugsCode(matt, "JSIV"));

const nicole = new ProjectManager({
    name: 'Nicole',
    location: 'Chicago',
    age: 37,
    gender: 'female',
    gradClassName: 'UI/UX2',
    favInstructor: 'Ryan'
})

console.log(nicole.name);
console.log(nicole.location);
console.log(nicole.age);
console.log(nicole.gender);
console.log(nicole.gradClassName);
console.log(nicole.favInstructor);
console.log(nicole.speak());
console.log(nicole.standUp("WEB17"));
console.log(nicole.debugsCode(paige, "JSIV"));