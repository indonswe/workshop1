import React from 'react';
import TableHeader from './TableHeader';

const students = (props) => { // is a component that takes list of menu or menus

    /*const getFirstName = (student) => {
        let fullNameArray = name.split(" "); // Mehrdad Javan  => [Mehrdad, Javan]
        let lastName =  fullNameArray[1]; //Javan
        return <span>{lastName}</span>
    };*/

const TableRow = (props) => {
    return (
        <ul>
            {
                props.students.map( (student) => (<li>{student}</li>))
                //props.students.map( (student) => (<li>{getLastName(student)}</li>))
            }
        </ul>
    );
};

}; 

export default TableRow;