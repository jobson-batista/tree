require('dotenv').config();

export default {
   "type": process.env.DB_TYPE,
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASS,
   "database": process.env.DB_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/model/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/model",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}