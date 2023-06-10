// ==== Async code ====

function a() {
  console.log(">>> a");
  console.log("<<< a");
}

function b() {
  console.log(">>> b");
  console.log("<<< b");
}

function c() {
  console.log(">>> c");

  let loop = true;
  while (loop) {}

  console.log("<<< c");
}

function main() {
  a();
  setTimeout(b, 4000);
  c();
}

main();

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
