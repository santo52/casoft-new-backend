const fs = require('fs')
const jwt = require('jsonwebtoken')
const privateKey = fs.readFileSync('./keys/private.key')


module.exports = {

    create(data) {
        return jwt.sign(
            data,
            { key: privateKey, passphrase: process.env.PK_PASSPHRASE },
            { algorithm: 'RS256' }
        )
    },

    decode(token, options = {}) {
        return jwt.decode(token, options)
    }
}