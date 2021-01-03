const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

const port = process.env.PORT || 3050;
app.listen(port, () => console.log('listening on ' + port));
