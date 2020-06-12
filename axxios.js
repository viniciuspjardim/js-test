  
  // Calls the callback function after dalay
  function cget(value, callback, error = false, delay = 3000) {
    setTimeout(() => {
      if(!error) {
        callback(null, value)
      }
      else {
        callback(new Error(`Error: ${value}`), null)
      }
    }, delay)
  }

  // Promisse factory that, after the dalay, resolve
  // to val if err === false
  function get(value = 42, error = false, delay = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!error) {
          resolve(value)
        }
        else {
          reject(`Error: ${value}`)
        }
      }, delay)
    })
  }

  function pad(number) {
    let spaces = ''
    for(let i = 0; i < number; i++) {
      spaces += '  '
    }
    return spaces
  }

  function readFile(callback, error = false, dalay = 3000) {
    setTimeout(() => {
      if(error) {
        callback(new Error('BOOM!\n'), null)
      }
      else {
        callback(null, 'My file 1, 2, 3\n')
      }
    }, delay)
  }

  module.exports = { get, cget, readFile }
  