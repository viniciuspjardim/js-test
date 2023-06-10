const axxios = require("./axxios");

// Callbacks vs Promises vs Async / Await

function runCallback() {
  console.log(">>> run callback");

  axxios.cget(42, (error1, data1) => {
    let x = data1 * 2;

    axxios.cget(x, (error2, data2) => {
      console.log(`<<< return callback (${data2})`);
    });
  });
}

function runPromise() {
  console.log(">>> run promise");
  const value = axxios.get(42);

  value.then((value2) => {
    console.log(`<<< promise (${value2})`);
  });

  console.log(`<<< return promise (${value})`);
}

async function runAsyncAwait() {
  console.log(">>> run async await");

  let value;
  value = await axxios.get(42);
  value = await axxios.get(value * 2);

  console.log(`<<< return async await (${value})`);
}

console.log("\n*** Program start ***\n");
runAsyncAwait();
console.log("\n*** Program end   ***\n");

// Call stack:
//

// Task queue (event loop pulls from here)
//

// Console:
//
//
//
//
//
//
