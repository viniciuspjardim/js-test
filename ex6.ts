function someError(a: number): void {
  if (a === 1) throw new Error("Beer?");
  else if (a === 2) throw "Wine?";
  throw 404;
}

function a(foo: number): void {
  try {
    someError(foo);
  } catch (error) {
    console.debug(error);
  }
}

function b(foo: number): void {
  try {
    someError(foo);
  } catch (error) {
    console.debug(error.message);
  }
}

function c(foo: number): void {
  try {
    someError(foo);
  } catch (error) {
    console.debug(error.message.charAt(0));
  }
}

function pro(foo: number): void {
  try {
    someError(foo);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.debug(error.message);
    } else if (typeof error === "string") {
      console.debug(error);
    } else {
      console.debug("?");
    }
  }
}

// a(1) // log the error
b(1);
c(1);
a(2);
b(2);

// c(2) // throw an error
pro(1);
pro(2);
pro(3);
