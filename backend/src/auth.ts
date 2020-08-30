//jwt stuff
const jwt = require('jsonwebtoken')

//passport stuff
const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts: any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'SECRET_KEY' //normally store this in process.env.secret

const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
  if (jwt_payload.email === 'paul@nanosoft.co.za') {
    return done(null, true)
  }
  return done(null, false)
})

passport.use(strategy)

export const makeAuthRoutes = (app: any) => {
  app.post('/api/login', (req, res) => {
    let { email, password } = req.body
    //This lookup would normally be done using a database
    if (email === 'test') {
      if (password === 'test') {
        //the password compare would normally be done using bcrypt.
        const opts: any = {}
        opts.expiresIn = 120 //token expires in 2min
        const secret = 'SECRET_KEY' //normally stored in process.env.secret
        const token = jwt.sign({ email }, secret, opts)
        return res.status(200).json({
          message: 'Auth Passed',
          token,
        })
      }
    }
    return res.status(401).json({ message: 'Auth Failed' })
  })
}
