const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

// define in global scope
let user

//Clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

//Clear db after tests
afterAll(async () => await db.sync({ force: true }))

// Describe User
describe('User', () => {
  // Test 1: User has an id
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  // Test 2: User has the correct username
  it('has the correct username', async () => {
    expect(user.username).toEqual('gandalf')
  })

  // Test 3: User can update their username
  it('can update their username', async () => {
    const newUsername = 'mithrandir'
    await user.update({ username: newUsername })
    const updatedUser = await User.findByPk(user.id)
    expect(updatedUser.username).toEqual(newUsername)
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
