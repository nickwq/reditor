import React from 'react';

export default class Table extends React.Component {
    render() {
        const {comps} = this.props;

        const table = this.props.comps.map(
            (comp, index) => (
                <li
                    className={comp.selected ? "selected-component":""}
                    key={index}
                    onClick={()=>this.props.onSelect(index)}
                >{comp.data}</li>
            )
        );
        return (
            <ul id="table-body">{table}</ul>
        );
    }
}