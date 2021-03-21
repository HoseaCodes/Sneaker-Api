const createError = require('http-errors');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config()

require('./config/database');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', adminRouter);
app.use('/api', apiRouter);

// Get sneaker data
async function getSneakerData() {
  try {
    const siteUrl = 'https://www.nicekicks.com/air-jordan-release-dates/'
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    })
    const $ = cheerio.load(data);
    // console.log(data)
    // console.log($)
    const eleSelector = '#main-content > div > main > article'

    const keys = [
      'date',
      'date',
      'name',
      'name',
      'color',
      'price',
      'brand',
      'name',
      'name',
      'color',
      'price',
      'brand'
    ]

    const sneakerArr = []

    $(eleSelector).each((parentIdx, parentElem) => {
      let keyIdx = 0;
      const sneakerObj = {}

      $(parentElem).children().each((childrenIdx, childElem) => {

        const articleValue = $(childElem).text()
        // console.log(articleValue)

        if (articleValue) {
          sneakerObj[keys[keyIdx]] = articleValue

          keyIdx++
        }
      })
      sneakerArr.push(sneakerObj)
    })
    return (sneakerArr)
  } catch (err) {
    console.log(err)
  }
}

app.get('/api/sneaker-data', async (req, res) => {
  try {
    const sneakerData = await getSneakerData()
    return res.status(200).json({
      result: sneakerData
    })
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    })
  }
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
