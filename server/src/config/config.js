module.exports = {
  port: process.env.port || 8081,
  db: {
    database: process.env.DB_NAME || 'tabTracker',
    user: process.env.DB_USER || 'tabTracker',
    password: process.env.DB_PASS || 'tabTracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.host || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
