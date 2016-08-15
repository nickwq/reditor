import ReactDOM from 'react-dom';
import React from 'react';
import Reditor from './reditor.jsx';

require('./main.css');

var app = document.createElement('div');
app.setAttribute("id", "app");
document.body.appendChild(app);
main();

function main() {
    return ReactDOM.render(<Reditor />, document.getElementById('app'));
}