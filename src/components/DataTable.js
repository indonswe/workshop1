import React from 'react';
//import TableRow from './TableRow';


const TableAction = () => {
    
    return (<button type="button" className="btn btn-danger">Delete</button>);
};

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



//const [studentList, setStudentList] = useState(initialData);
    
    
    const DataTable = () => {


        const studentList = [
            {
                id: 1,
                firstName: Karl,
            },
            {
                id: 2,
                firstName: Dorian,
            },
            {
                id: 3,
                firstName: Kalle,
            },
        ]
        const [students, setStudents] = useState(studentList);
    
        const listOfStudents = <TableRow students = {studentList}/>;


    return (

        <div>
            
            <h1>Yoo</h1>

        </div>
    );
    };

export default DataTable;
