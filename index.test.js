const FP = require('./index');

const getName = (person) => person.name
const uppercase = (string) => string.toUpperCase()
const reverse = (string) => string
.split('')
.reverse()
.join('')

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