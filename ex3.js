const axxios = require('./axxios')

function runCallback() {
  console.log('>>> run callback')
  console.log(`<<< return callback ()`)
}

function runPromise() {
  console.log('>>> run promise')
  console.log(`<<< return promise ()`)
}

async function runAsyncAwait() {
  console.log('>>> run async await')
  console.log(`<<< return async await ()`)
}

console.log('\n*** Inicio do programa ***\n')
runCallback()
console.log('\n*** Fim    do programa ***\n')
