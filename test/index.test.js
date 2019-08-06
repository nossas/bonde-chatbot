import sayHello from '../src/index_old.js'
import app from '../src'

test('sayHello', () => {
  expect(typeof app).toBe('function')
  expect(sayHello()).toBe('Hello, Haz!')
  expect(sayHello('foo')).toBe('Hello, foo!')
})
