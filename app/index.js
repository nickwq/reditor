import ReactDOM from 'react-dom';
import React from 'react';
import Reditor from './reditor.jsx';
import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

require('./main.css');

let defaultComp =  [
    {
        name: 'BIT',
        data: 1,
        selected: false
    },
    {
        name: "LWD",
        data: 2,
        selected: false
    }
];
const components = (state =defaultComp, action) => {
    switch (action.type) {
        case 'select':
            return state.map((comp, index) => {
                if (index === action.index) {
                    return Object.assign({}, comp, {
                        selected: !comp.selected
                    })
                }
                return comp;
            });
        default:
            return state;
    }
};

const reditorApp = combineReducers({
    components
});
let store = createStore(reditorApp);

var app = document.createElement('div');
app.setAttribute("id", "app");
document.body.appendChild(app);
main();

function main() {
    let rootElement = document.getElementById('app');
    return ReactDOM.render(<Provider store={store}><Reditor /></Provider>, rootElement);
}