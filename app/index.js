import ReactDOM from 'react-dom';
import React from 'react';
import Reditor from './reditor.jsx';
import {Provider} from 'react-redux';
import {loadComponents} from './actions/componentActions';

import configureStore from './store/configureStore';

require('./main.css');
// let defaultComp = {
//     "components": [
//         {
//             name: 'BIT',
//             data: 1,
//             selected: false
//         },
//         {
//             name: "LWD",
//             data: 2,
//             selected: false
//         }
//     ]
// };
const store = configureStore();
store.dispatch(loadComponents());

var app = document.createElement('div');
app.setAttribute("id", "app");
document.body.appendChild(app);
main();

function main() {
    let rootElement = document.getElementById('app');
    return ReactDOM.render(<Provider store={store}><Reditor /></Provider>, rootElement);
}