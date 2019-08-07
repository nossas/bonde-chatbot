import sayHello from '../index_old'
import app from '../'

test('sayHello', () => {
  expect(typeof app).toBe('function')
  expect(sayHello()).toBe('Hello, Haz!')
  expect(sayHello('foo')).toBe('Hello, foo!')
})
