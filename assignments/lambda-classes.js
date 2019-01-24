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
        return `Hello my name is ${this.name}, I am from ${this.location}.`
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
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
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
    listsSubjects() { // <==================================== NEED TO FINISH THIS
        for(i = 0; i < student.length; i++) {
            console.log()
        }                            
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
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
        console.log(`${name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`)
    }
}

// =================================== Objects ===================================

// === Object: Instructor ===
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

  // === Object: Instructor ===
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

