import ReactDOM from 'react-dom';
import React from 'react';
import Reditor from './reditor.jsx';
import {createStore} from 'redux';

require('./main.css');

const counter = (state =0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
const store = createStore(counter);

store.subscribe(() => {
    document.body.innerHTML = store.getState();
});
document.addEventListener('click', () =>{
    store.dispatch({type:'INCREMENT'});
});

var app = document.createElement('div');
app.setAttribute("id", "app");
document.body.appendChild(app);
main();

function main() {
    return ReactDOM.render(<Reditor />, document.getElementById('app'));
}