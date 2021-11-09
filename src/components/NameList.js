import React from 'react';

/*const names = ["Mehrdad Javan", "Ulf Bengtsson", "Simon Elbrink"];

const getLastName = (name) => {
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
};*/

const NameList = () => {

    const studentList = [
        {
            id: 1,
            firstName: Karl
        },
        {
            id: 2,
            firstName: Dorian
        },
        {
            id: 3,
            firstName: Kalle
        },
    ]

    const [students, setStudents] = useState(studentList);

    return (
    <h1>Hello</h1>
    );
};

export default NameList;