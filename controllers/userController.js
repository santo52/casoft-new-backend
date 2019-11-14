const User = require('../models/user')

module.exports = {


  async getUserLogin(username, password) {
    
    const user = await User.findOne({
      $and: [
        { $or: [{ username }, { email: username }] },
        { deleted: false }
      ]
    })

    if(user){
      const isCorrectPassword = await user.comparePassword(password)
      return isCorrectPassword ? user : null
    }

  }
}