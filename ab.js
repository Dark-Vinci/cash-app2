// const {queueMicrotask} = require('process')

const prom = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('resolving')
        res('done doneeeee')
    }, 4000)
});

console.log("first")

queueMicrotask(() => console.log("micro task queue"))
prom.then(el => {console.log(el)});
// console.log({a})


console.log("last")

// mongodb+srv://47311532hc:47311532hc@atlas-sql-613949d4cb057f0f559958c4-7c5la.a.query.mongodb.net/mydatabase?retryWrites=true&w=majority


// atlas-sql-613949d4cb057f0f559958c4-7c5la.a.query.mongodb.net