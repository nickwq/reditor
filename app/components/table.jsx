import React from 'react';

const Table = (props) => {
    const table = props.comps.map(
        (comp, index) => (
            <li
                className={comp.selected ? "selected-component":""}
                key={index}
                onClick={()=>props.onSelect(index)}
            >{comp.data}</li>
        )
    );
    return (
        <ul id="table-body">{table}</ul>
    );
};

export default Table;