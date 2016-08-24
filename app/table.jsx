import React from 'react';

export default class Table extends React.Component {
    render() {
        const {comps} = this.props;
        console.log('loging...hahah', comps);

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
            <ul>{table}</ul>
        );
    }
}