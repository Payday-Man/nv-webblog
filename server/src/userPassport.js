const passport =require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').JwtStrategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use('user',
    new JwtStrategy({
        jwyFromrequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrkey: config.authentication.jwtSecret
    }, async function (jwtPayload, done) {
        try {
            const user = await User.finfOne({
                where: {
                    email: jwtPayload.email
                }
            })

            if (!user) {
                return done(new Error(), false)
            }
                return done(null,user)
        } catch (err) {
            return done(new Error(), false)
        } 
    })
)

module.exports = null