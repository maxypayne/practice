// bind, call, apply

// bind

const person = {
  description: 'Human',
  getDescription() { return this.description + '1' },
  getDescription2: function () { return this.description + '1' },
  getDescription3: () => this.description + '3',
}

const first = person.getDescription;
const second = person.getDescription2;
const third = person.getDescription3;

console.log(person.getDescription());
console.log(person.getDescription2());
console.log(person.getDescription3());

console.log(first());
console.log(second());
console.log(third());
