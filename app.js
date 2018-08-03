const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models');
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

const init = async () => {
  await models.db.sync({force: true});

  const  PORT = 1337;
  app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
}

init();
