import React from 'react';
import TableHeader from './TableHeader';



const TableRow = () => {
    return (
        <div className="container">
            <table className="table">
               <TableHeader />
               <TableRow />
            </table>
        </div>
    );
};

export default TableRow;