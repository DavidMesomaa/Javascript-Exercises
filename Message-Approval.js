let username = prompt(`Enter your name: `);
let genName = 'User';
let msg = function() {
    return confirm(`Hey ${username || genName}, Are you leaving now 🙁?`);
}

let newMsg = msg();

if (newMsg == true) {
    alert(`Bye now ${username || genName} 😥`)
} else {
    alert(`Let's continue the Journey 😁`)
}