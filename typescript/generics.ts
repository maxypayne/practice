const primitive = <Type>(value: Type): void => {
  if (typeof value === 'number') {
    console.log(Math.sqrt(value));
  } else if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log('Wrong type')
  }
}


primitive<string>('Mama');
primitive<number>(134);
primitive<{}>({}); // should log Wrong type


const loggingIdentity= <Type>(arg: Array<Type>): Array<Type> => {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

interface Hotel {
  id: string;
  name: string;
}

// const promise = (): Promise<Hotel[]> => new Promise((resolve, reject) => {
//   resolve([{id: 1, name : 'MAXIM'}]);
// })


const identity = <Type>(arg: Type): Type => {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;
let myIdentite: { <Type>(arg: Type): Type } = identity;
myIdentite('sur');

interface GenericFunc {
  <Type>(arg: Type): Type;
}

function getAge<Type>(arg: Type): Type {
  return arg;
}

let supposedAge: GenericFunc = getAge;


interface GenericNameFn<Type> {
  (arg: Type): Type;
}

function getName<Type>(arg: Type): Type {
  return arg;
}

let myName: GenericNameFn<number> = getName;


class GenericNumber<Type> {
  zero: Type;
  add: (x: Type, y: Type) => Type;
}

const addItems = new GenericNumber();
addItems.zero = 's';
addItems.add(4, 9);


interface Lengthwise { length: number }

function loggingIdent<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdent('mamai');

const getProperty = <Type, Key extends keyof Type>(obj: Type, key: Key) => {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3};
getProperty(x, 'a');
// getProperty(x, 'f'); // Argument of type '"f"' is not assignable to parameter of type '"a" | "b" | "c"'.

// keyOf

type Point = { x: number; y: number };
type P = keyof Point; // "x"  | "y"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;


type Mapish = { [k: string]: boolean };
type M = keyof Mapish;




// functions

const func = (fn: (param: string) => void) => {
  return fn('this is mercredi');
}

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

const doSomething = (fn: DescribableFunction) => {
  console.log(fn.description);
  fn(1);
}
