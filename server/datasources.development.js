module.exports = {
  "db": {
    "name": "db",
    "connector": "mongodb",
    "host": "mongohost",
    "port": 27017,
    "url": "",
    "database": "purchase",
    "user": "api",
    "password": process.env.MONGO_API_PASSWORD
  }
}
