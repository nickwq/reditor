import React from 'react';
import Schema from './schema.jsx';
import Table from './table.jsx';
import {connect} from 'react-redux';

class Reditor extends React.Component {
    render() {
        const { dispatch, selectHandler, components } = this.props;
        const createAction = function(index) {

            return {
                type:'select',
                index: index
            }
        };
        return (
            <div id="reditor-body">
                <Schema  onSelect={index=>dispatch(createAction(index))} comps={components}></Schema>
                <Table onSelect={index=>dispatch(createAction(index))} comps={components}></Table>
            </div>
        );
    }
}

function select(state) {
    return state;
}

export default connect(select)(Reditor)