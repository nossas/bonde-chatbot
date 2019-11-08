import { Storage } from '../../playground/speech-core/store'

let store

beforeEach(() => {
  store = new Storage()
})

afterEach(() => {
  store.drop()
})

test('storage should be a singleton class', () => {
  const store2 = new Storage()

  expect(store).toBe(store2)
})

test('storage register should be add an action in actions store', () => {
  const action = { lorem: 'inpsum' }
  store.register(action)

  expect(store.getActions()).toEqual([action])
})

test('storage drop should return the action list and remove it from storage', () => {
  const action = { lorem: 'inpsum' }
  store.register(action)
  const result = store.drop()

  expect(result).toEqual([action])
  expect(store.getActions().length).toEqual(0)
})
