import React from 'react';
import Schema from './schema.jsx';
import Table from './table.jsx';

export default class Reditor extends React.Component {
    render() {
        const components = [
            {
                name: 'BIT',
                data: 1
            },
            {
                name: "LWD",
                data: 2
            }
        ];
        return (
            <div>
                <Schema comps={components}></Schema>
                <Table comps={components}></Table>
            </div>
        );
    }
}