const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('Server alive at time ' + Date() + ' and listening on port ' + config.port)
  })
