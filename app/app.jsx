var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!./styles/app.scss')

ReactDOM.render(
  <h1>Boilerplate</h1>,
  document.getElementById('app')
);
