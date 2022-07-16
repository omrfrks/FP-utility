const FP = require('./lib/index');

const getName = (person) => person.name
const uppercase = (string) => string.toUpperCase()
const reverse = (string) => string
.split('')
.reverse()
.join('')
const sum = (x,y) => x + y
const identity = (x) => x
const foo = (fn) => fn( [ 3, 9 ] )
const boo = (fn) => fn( 3, 9 )

test('pipe TestString with getName,uppercase and reverse functions', () => {
  expect(FP.pipe(
    getName,
    uppercase,
    reverse 
  )({ name: 'TestString' })).toBe('GNIRTSTSET');
});

test('compose TestString with reverse,uppercase and getName functions', () => {
  expect(FP.compose(
    reverse,
    uppercase,
    getName
  )({ name: 'TestString' })).toBe('GNIRTSTSET');
});

test('findPropIn with object', () => {
  expect(FP.findPropIn('name', { name: 'Test Name' })).toBe('Test Name');
  expect(FP.findPropIn('school', { name: 'Test Name', education: {school: 'Test School'} })).toBe('Test School');
  expect(FP.findPropIn('age', { name: 'Test Name' })).toBe(undefined);
});

test('unary with map and parseInt', () => {
  expect(["1","2","3"].map( FP.unary( parseInt ) )).toStrictEqual([1,2,3]);
});

test('spreadArgs', () => {
  expect(foo(FP.spreadArgs(sum))).toBe(12);
});

test('gatherArgs', () => {
  expect(boo(FP.gatherArgs(identity))).toStrictEqual([3,9]);
});