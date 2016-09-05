import React from 'react';

const Schema = (props) => {
    const schema = props.comps.map(
        (comp, index) => (
            <li
                className={comp.selected ? "selected-component":""}
                key={index}
                onClick={()=>props.onSelect(index)}
            >{comp.name}</li>
        )
    );

    return (
        <ul id="schema-body">{schema}</ul>
    );
};

export default Schema;