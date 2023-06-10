// ==== Sync code ====

function c() {
  console.log(">>> c");
  console.log("<<< c");
}

function b() {
  console.log(">>> b");
  console.log("<<< b");
}

function a() {
  console.log(">>> a");
  b();
  c();
  console.log("<<< a");
}

a();

// Call stack:
//

// Console:
//
//
//
//
//
//
