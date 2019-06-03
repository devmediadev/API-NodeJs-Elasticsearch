require('./lib/enviroment').variables();
const express = require('express');
const app = express();

const indexRouter = require('./routes');
const { handler500, handler404 } = require('./middlewares/errorHandler');
const port = process.env.APP_PORT || 3000;

app.use('/', indexRouter);

app.use(handler404);
app.use(handler500);

app.listen(port, () => {
    console.log(`ouvindo a porta ${port}`);
});

module.exports = app;
