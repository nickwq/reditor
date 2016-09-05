import React from 'react';
import Schema from './components/schema.jsx';
import Table from './components/table.jsx';
import {bindActionCreators} from  'redux';
import {connect} from 'react-redux';

import * as componentActions from '../app/actions/componentActions';

class Reditor extends React.Component {
    render() {
        function onSelectComponent(index) {
            this.props.actions.selectComponent(index);
        }
        return (
            <div id="reditor-body">
                <Schema  onSelect={index=>onSelectComponent(index)} comps={this.props.components}></Schema>
                <Table onSelect={index=>onSelectComponent(index)} comps={this.props.components}></Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        components: state.components
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(componentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reditor)