const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  dotenv = require('dotenv').config({ path: './.env' }),
  mongoose = require('mongoose'),
  app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => console.log('mongo connected'))
  .catch(err => console.log(err))

const port = 3000 || process.env.PORT
app.listen(port, () => console.log(`running on port ${port}`))