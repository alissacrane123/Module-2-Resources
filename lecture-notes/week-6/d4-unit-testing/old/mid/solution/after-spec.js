

describe('User', () => {

  describe('validateUsername()', () => {

    beforeEach(() => {

      // pseudo code
      // create a user named bob and save to database
      user = User.create({username: 'bob'})
    })

    afterEach(() => {
      // pseudo code for finding a user by username 
      // and deleting from database after each test
      User.findBy({username: 'bob'}).delete()
    })

    context('when username is already taken', () => {    
      it('should return false', () => {
        
        testUser = User.validateUsername('bob');

        expect(testUser).to.be.false
      })
    })
  })
})