const FP = require('./index');

test('pipe TestString with getName,uppercase and reverse functions', () => {
  getName = (person) => person.name
  uppercase = (string) => string.toUpperCase()
  reverse = (string) => string
  .split('')
  .reverse()
  .join('')

  expect(FP.pipe(
    getName,
    uppercase,
    reverse 
  )({ name: 'TestString' })).toBe('GNIRTSTSET');
});


test('compose TestString with reverse,uppercase and getName functions', () => {
  getName = (person) => person.name
  uppercase = (string) => string.toUpperCase()
  reverse = (string) => string
  .split('')
  .reverse()
  .join('')

  expect(FP.compose(
    reverse,
    uppercase,
    getName
  )({ name: 'TestString' })).toBe('GNIRTSTSET');
});