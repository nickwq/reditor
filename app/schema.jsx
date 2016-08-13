import React from 'react';

export default class Schema extends React.Component {
    render(){
        const schema = this.props.comps.map(
            (comp) => (
                <li>{comp.name}</li>
            )
        );
        return (
            <ul>{schema}</ul>
        );
    }
}