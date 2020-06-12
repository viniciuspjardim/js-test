// Callback factory that call cb callback with val as an
// arg after the delay
function cbFactory(cb, val, delay = 10) {
  setTimeout(() => {
    cb(val);
  }, delay);
}

// Promisse factory that resolves to val after the delay
function pmFactory(val, delay = 10) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, delay);
  });
}

// Promisse factory that reject after the delay
function pmErrFactory(val, delay = 10) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error: ${val}`));
    }, delay);
  });
}

// Promisse factory that, after the dalay, resolve to val if val >= 0
// else reject
function pmPositiveFactory(val, delay = 10) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(val >= 0) {
        resolve(val);
      }
      else {
        reject(`Error: ${val}`);
      }
    }, delay);
  });
}

describe('callback', () => {
  it('should recive val as parameter', done => {
    cbFactory(par => {
      expect(par).toBe(1);
      done();
    }, 1);
  });
  it('should not recive a defined parameter', done => {
    cbFactory(par => {
      expect(par).toBeUndefined();
      done();
    });
  });
});

describe('promise', () => {
  it('should recive val as parameter when the promise resolve', () => {
    return pmFactory(1)
      .then(par => {
        expect(par).toBe(1);
      });
  });
  it('should not recive a defined parameter in the promise chain', () => {
    return pmFactory(1)
      .then(par => {
        expect(par).toBe(1);
      })
      .then(par => {
        expect(par).toBeUndefined();
      });
  });
  it('should recive a 1, 2, 3 array when all promises resolve', () => {
    const arr = [pmFactory(1), pmFactory(2), pmFactory(3)];
    return Promise.all(arr)
      .then(par => {
        expect(par).toEqual([1, 2, 3]);
      });
  });
  it('should catch the error', () => {
    let num = 1;
    return pmErrFactory(2)
      .then(par => {
        // Line never executed because the promisse is
        // is rejected
        num += par;
      })
      .catch(err => {
        expect(err.message).toMatch('Error: 2');
        expect(num).toBe(1);
      });
  });
});

describe('awaiting promises', () => {
  it('should recive val when resolve', async () => {
    const ret = await pmFactory(1);
    expect(ret).toBe(1);
  });
  it('should resolve to undefined', async () => {
    const ret = await pmFactory();
    expect(ret).toBeUndefined();
  });
  it('should recive a 1, 2, 3 array when all promises resolve', async () => {
    const arr = [pmFactory(1), pmFactory(2), pmFactory(3)];
    const ret = await Promise.all(arr);
    expect(ret).toEqual([1, 2, 3]);
  });
  it('should return a 1, 2, 3 array when all promises resolve', async () => {
    const f = async () => {
      const arr = [pmFactory(1), pmFactory(2), pmFactory(3)];
      const ret = await Promise.all(arr);
      return ret;
    }
    expect(await f()).toEqual([1, 2, 3]);
  });
  it('should throw an exception when awaiting function due to promise rejection', async () => {
    let list = null;
    const f = async () => {
      // Last promise will be rejected
      const arr = [pmFactory(1), pmFactory(2), pmErrFactory(3)];
      const ret = await Promise.all(arr);
      return ret;
    }
    try {
      list = await f();
    }
    catch(err) {
      expect(err.message).toMatch('Error: 3');
      expect(list).toBeNull();
    }
  });
  it('Should execute finally after try', async () => {
    let arr = [1];
    try {
      arr.push(await pmFactory(2));
    }
    finally {
      arr.push(3);
    }
    expect(arr).toEqual([1, 2, 3]);
  });
  it('Should add a promise in index 1', async () => {
    let arr = [1];
    try {
      arr.push(pmFactory(2));
    }
    finally {
      arr.push(3);
    }
    expect(arr[0]).toBe(1);
    expect(await arr[1]).toBe(2);
    expect(arr[2]).toBe(3);
  });
});

describe('testing resolve / rejection with await and try catch', () => {
  it('shuld resolve to 1 (positive number resolves)', async () => {
    let ret = 0;
    try {
      ret = await pmPositiveFactory(1);
    }
    catch(err) {
      ret = 2;
    }
    expect(ret).toBe(1);
  });
  it('shuld reject and catch the error (negative number rejects)', async () => {
    let ret = 0;
    try {
      ret = await pmPositiveFactory(-1);
    }
    catch(err) {
      ret = -2;
    }
    expect(ret).toBe(-2);
  });
});