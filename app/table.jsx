import React from 'react';

export default class Table extends React.Component {
    render() {
        const table = this.props.comps.map(
            (comp) => (
                <li>{comp.data}</li>
            )
        );
        return (
            <ul>{table}</ul>
        );
    }
}