
// Paste the array of student objects above into your JavaScript file.
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Copy the createStudentComponent function into your code.
// const createStudentComponent = (name, subject, info, headingClassName) => {
//     return  `
//     <div class="student">
//         <h1 class="xx-large ${headingClassName}">${name}</h1>
//         <section class="bordered dashed section--padded">${subject}</section>
//         <aside class="pushRight">${info}</aside>
//     </div>`
// }

// const swathiComponent = createStudentComponent("Swathi", "coding", "this is hard but she will persevere", "passing")
// console.log(swathiComponent)



// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
//     } else {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }


// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = 
//         `<div class="student">
//         <h1 class="xx-large passing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     } else {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large failing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
//     } else {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }





// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = 
//         `<div class="student">
//         <h1 class="xx-large passing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     } else {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large failing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }
// document.querySelector(".student-container").innerHTML += htmlString;
// If a student is passing, then the structure should look like the following.

// {/* <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div> */}


// const createStudentComponent = (studentObject) => {
//     if (studentObject.score >= 60) {
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${studentObject.name}</h1>
//             <section class="bordered dashed section--padded">${studentObject.subject}</section>
//             <aside class="pushRight">${studentObject.info}</aside>
//         </div>`
//     } else {
//         return `
//         <div class="student">
//             <h1 class="xx-large failing">${studentObject.name}</h1>
//             <section class="bordered dashed section--padded">${studentObject.subject}</section>
//             <aside class="pushRight">${studentObject.info}</aside>
//         </div>`
//         }
// }
// for (student of students){
//     let studentComponent = ""
//     studentComponent = createStudentComponent(student)
//     document.querySelector("#container").innerHTML += studentComponent
// }

// Write functions that build the sub-components of the larger student component.

// h1
// section
// aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${h1(student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>
// `
// console.log(createStudentComponent)
// document.querySelector(div).innerHTML += student


// const element = (elementType, text, className) =>
// {
//     let createElement = document.createElement(elementType);
//     let ElementText = document.createTextNode(text);
//     createElement.setAttribute("class", ${className});
//     createElement.appendChild(ElementText);
//     document.body.appendChild(createElement);
// }
// const createStudentComponent = (student, headingClassName) =>{ `
//     <div id="student">
//         ${element("h1", student.name, xx-large ${headingClassName})}
//         ${element("section", student.subject, "bordered dashed section--padded")}
//         ${element("aside", student.info, "pushRight")}
//     </div>`
// }
// for (student of students){
//     let studentComponent = ""
//     if (student.score >= 60){
//         studentComponent = createStudentComponent(student, "passing")
//     }
//     else{
//         studentComponent = createStudentComponent(student, "failing")
//     } 
// }



// Challenge: Composition of Smaller Components
// const h1 = (text, headingClassName) =>
// {
//     let createHeading = document.createElement("h1");
//     let headingText = document.createTextNode(text);
//     createHeading.setAttribute("class", `xx-large ${headingClassName}`)
//     createHeading.appendChild(headingText);
//     document.body.appendChild(createHeading);
// }
// const section = (text) =>
// {
//     let createSection = document.createElement("section");
//     let sectionText = document.createTextNode(text);
//     createSection.setAttribute("class", "bordered dashed section--padded")
//     createSection.appendChild(sectionText);
//     document.body.appendChild(createSection);
// }
// const aside = (text) =>
// {
//     let createAside = document.createElement("aside");
//     let asideText = document.createTextNode(text);
//     createAside.setAttribute("class", "pushRight")
//     createAside.appendChild(asideText);
//     document.body.appendChild(createAside);
// }
// const createStudentComponent = (student, headingClassName) => {
// `
//     <div class="student">
//         ${h1(student.name, headingClassName)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>
// `
// }
// for (student of students){
//     let studentComponent = ""
//     if (student.score >= 60){
//         studentComponent = createStudentComponent(student, "passing")
//     }
//     else{
//         studentComponent = createStudentComponent(student, "failing")
//     }
// }

// Look at the three functions you created to build an h1, a section, and an aside. Notice that each one follows the same pattern of accepting a single argument - a string - and outputting a single HTML component. Since there is a pattern, you can consider writing a single function that generalizes the creation of an HTML component even further.

// Create one function that will generate any HTML component, with any content. It should be defined with three arguments.

// The type of HTML component to make
// The content of the component
// The value of the class attribute
const createStudentComponent = (students) => `
    <div id="student">
        ${element("h1", students.name, "xx-large passing")}
        ${element("section", students.subject, "bordered dashed section--padded")}
        ${element("aside", students.info, "pushRight")}
    </div>`

    function element (element) {
    document.querySelector(body).innerHTML += ""
}
    