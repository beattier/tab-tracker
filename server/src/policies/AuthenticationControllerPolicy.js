const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        // THIS IS WHERE I STOPPED ON FRIDAY
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numbers
            <br>
            2. It must be at least 8 characters
            <br>
            3. It cannot be longer than 32 characters`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break
      }
    } else {
      next()
    }
  }
}
