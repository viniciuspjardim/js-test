class Test {
  #propA;
  #propD;

  constructor({ propA, propB, propD }) {
    this.#propA = propA;
    this.propB = propB;
    this.#propD = propD;
  }

  get propA() {
    return this.#propA;
  }

  get propC() {
    return 5;
  }

  fun() {
    return 6;
  }
}

const t = new Test({ propA: 2, propB: 3, propD: 4 });
console.log(t.propA);
console.log(t.propB);
console.log(t.propC);
console.log(t.propD);
console.log(t.fun);
console.log(t.fun());
