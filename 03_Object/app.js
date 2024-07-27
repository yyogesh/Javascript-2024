let user = {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    "first Name": "John",
    "last name": "John",
    age: 30,
    isActive: true
}

var arr = [];

var id = 12
arr = ["asdf", 1, 2]

console.log(user.id, user.name, user['email'], user['first Name']);

user.isAdmin = true;

user.name = "John Doe1";

console.log(user)

delete user.isAdmin

console.log(user)

let users = [
    {
        id: "1",
        name: "John Doe",
        email: "johndoe@example.com",
        "first Name": "John",
    },
    {
        id: "2",
        name: "John Doe",
        email: "johndoe@example.com",
        "first Name": "John",
    }
]

var json = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}


console.log(JSON.stringify(json))

// {"name":"John Doe","age":30,"city":"New York"}

console.log(JSON.parse('{"name":"John Doe","age":30,"city":"New York"}'))

var a = 10;

var b = a;

b = 20;

console.log(a, b);

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1, obj2)

let obj3 = { name: "Charlie" };
let obj4 = { name: "Charlie" };

console.log(obj3 === obj4); // false
console.log(obj1 === obj2); // true

// Shallow copy level 1 
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original)

shallowCopy.a = 5;
shallowCopy.b.c = 10;

console.log(original, shallowCopy)

// Deep copy N level
let original1 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original1))
deepCopy.b.c = 20;

console.log(original1, deepCopy)

// Search in the table 

const company = {
    // Basic properties
    name: "TechCorp",
    founded: 2010,

    // Nested object
    address: {
        street: "123 Innovation Ave",
        city: "San Francisco",
        country: "USA"
    },

    // Array property
    departments: ["Engineering", "Marketing", "HR", "Finance"],

    getInfo1: function () {
        console.log(`Company: ${this.name}`);
        console.log(`Founded: ${this.founded}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`);
        console.log(`Departments: ${this.departments.join(", ")}`);
    },

    // Method
    getInfo() {
        return `${this.name} was founded in ${this.founded}.`;
    },

    // Computed property
    ["employee_count_" + new Date().getFullYear()]: 500,

    get age() {
        return new Date().getFullYear() - this.founded;
    },

    set addDepartment(dept) {
        if (dept && typeof dept === "string" && dept.trim()) {
            this.departments.push(dept.trim());
        } else {
            throw new Error("Couldn't find department")
        }
    }
}


console.log(company.getInfo(), company, company["employee_count_" + new Date().getFullYear()])
console.log("********************************")
console.log(company.founded, company.age)
company.founded = 2009
company.age = 20
company.addDepartment = "Account"
console.log(company.founded, company.age, company.departments, company.addDepartment)

console.log("********************************")

// const name = company.name
// const age = company.age

const { name, age } = company

console.log(name, age)

console.log("********************************")

const companyName1 = company.name

const { name: companyName, age: companyAge } = company

console.log(companyName, companyAge)

console.log("********************************")

const { city = "Unknown" } = company

console.log(city, company.city)


const user1 = {
    id: 42,
    details: {
        name: {
            first: "Jane",
            last: "Smith"
        },
        age: 28
    }
};

const { details: { name: { first, last }, age: userAge } } = user1;
console.log(first, last, userAge);

console.log("********************************")

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Delhi"
};


// const { firstName: fn, lastName: ln, age: a } = person;
const { firstName: fName, lastName, ...rest } = person
// delete person.firstName
// delete person.lastName
console.log(fName, rest)

console.log("********************************")

var x5 = "age"

console.log(person[x5], person.age, person['age'])

console.log("********************************")

function personInfo(person) {
    console.log(`${person.firstName} ${person.lastName}, ${person.age} years old`);
}

personInfo(person)

console.log("********************************")

function personInfo(person) {
    const { firstName, lastName, age } = person;
    console.log(`${firstName} ${lastName}, ${age} years old`);
}

personInfo(person)

console.log("********************************")

function personInfo({ firstName, lastName, age }) {
    console.log(`${firstName} ${lastName}, ${age} years old`);
}

personInfo(person)

console.log("********************************")

function personInfo1({ firstName, lastName, age, state = "Haryana" }) {
    console.log(`${firstName} ${lastName}, ${age} years old. Person State is ${state}`);
}

personInfo1(person)

console.log("********************************")

function getUser() {
    return {
        username: "johndoe",
        email: "john@example.com"
    };
}

const { username, email } = getUser();
console.log("********************************")
const users2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

for(let user of users2) {
  console.log(user.id, user.name);
}

for(let {id, name} of users2) {
    console.log(id, name);
}
console.log("********************************")

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Delhi"
};

console.log(Object.keys(person2))
console.log(Object.values(person2))
console.log(Object.entries(person2))

console.log("********************************")

const person3 = { name: "John", age: 30 };

Object.freeze(person3);
person3.age = 31; 
person3.city = "New York";
delete person3.name;

console.log(person3)
console.log(Object.isFrozen(person3));

console.log("********************************")

const person4 = { name: "John", age: 30 };

Object.seal(person4);
person4.age = 31;
console.log(person4);
person4.city = "New York"; 
console.log(person4);

console.log("********************************")

const person5 = { name: "John", age: 30 };
const person6 = { lastName: "John", id: 30 };

const person7 = {...person5, ...person6, isAdmin: true, name: "abc"}

console.log(person7)