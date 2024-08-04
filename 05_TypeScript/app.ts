let a: number = 10;

let st = "asdf"
//st = 10

// SubmitEvent(a, b)

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const result = sum(10, 20)
// sum("", 10)

function sum(a: number | string, b: number): number {
    return Number(a) + (b);
}

const result = sum(10, 20)
sum("", 10)


interface User {
    id: string;
    name: string;
    isActive: boolean
}

const abcUser: IUSER = {
  id: 1,
  name:  'asfd',
  username : 'asdf'
}

const xyzUser: Partial<IUSER> = {
    id: 11
}

interface Employee extends IUSER {
    employeeId: number
}

const abcEmployee: Employee = {
    employeeId: 1,
    id: 1,
    name: 'asdf',
    username: 'asdf'
}


interface IUSER {
    id: number;
    name: string;
    username: string;
    email?: string;
    address?: IAddress,
    phone?: string;
    website?: string;
    company?: Company;
    getUserId?: (props: number) => number
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

type GEO = {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GEO
}

const x = {
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

type ResultFn = (props: number) => number

function getResult(a: number, b: number): ResultFn {
  return (c: number) => {
     return a + b + c;
  }
}


const resultFn: ResultFn = getResult(10, 20);

interface ConfigProperties {
    [key: string]: string | number,
   // abc: string
}

const config: ConfigProperties = {
    abc: "123",
    xyz: 12
}

enum Language {
    English = "en-us",
    French = "fr-ca"
}


const userLang = Language.English;

function getInfo<T>(a: T): T {
return a
}

const x1 = getInfo<number>(10)

const x2 = getInfo<string>("10")