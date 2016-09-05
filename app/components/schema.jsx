import React from 'react';

export default class Schema extends React.Component {
    render(){
        const schema = this.props.comps.map(
            (comp, index) => (
                <li
                    className={comp.selected ? "selected-component":""}
                    key={index}
                    onClick={()=>this.props.onSelect(index)}
                >{comp.name}</li>
            )
        );
        return (
            <ul id="schema-body">{schema}</ul>
        );
    }
}