console.log("This is mihir's async await");

async function mihir(){
    console.log('Inside mihir function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    
}

console.log("Before calling mihir")
let a = mihir();
console.log("After calling mihir")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")