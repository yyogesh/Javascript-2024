const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Success")
    }, 2000);
})

simplePromise.then(res => {
    console.log("simplePromise", res)
}).catch((err) => {
    console.error("simplePromise error", err)
})

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => {
    console.log("User", res)
})

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log('users', users)
}