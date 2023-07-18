const{Strategy, ExtractJwt} = require('passport-jwt')

const {config} = require('../../../config/config')
console.log(config.jwtSecret)

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options,(payload,done)=>{
 return done(null, payload)
})

module.exports = jwtStrategy