const person1 = {
  name: 'Mia',
  getName: function() {
    return this.name
  }
}

const person2 = {
  name: 'Ana',
  getName() {
    return this.name
  }
}

const person3 = {
  name: 'Jão',
  getName() {
    const foo = function() {
      return this.name
    }
    return foo()
  }
}
const person4 = {
  name: 'Alice',
  getName() {
    const foo = () => {
      return this.name
    }
    return foo()
  }
}

console.log(person3.getName())
console.log(person4.getName())