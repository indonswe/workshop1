import React from 'react';
import TableAction from './TableAction';

const TableHeader = () => {
    return (
    <thead>
        <tr>
            <th style={ {color: 'red'} }>Id</th>
            <th className={'test'}>Name</th>
            <th>TableAction</th>
        </tr>
    </thead>
    );
}

export default TableHeader;