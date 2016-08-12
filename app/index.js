import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './component.jsx';

var app = document.createElement('div');
app.setAttribute("id", "app");
document.body.appendChild(app);
main();

function main() {
    return ReactDOM.render(<Hello />, document.getElementById('app'));
}