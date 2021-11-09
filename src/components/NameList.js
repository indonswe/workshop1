import React from 'react';

/*const names = ["Mehrdad Javan", "Ulf Bengtsson", "Simon Elbrink"];

const getLastName = (name) => {
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
};*/

const NameList = () => {
    const initialData =  {id: '', firstName: ''};
    const [studentList, setStudentList] = useState(initialData);

    return (
    <h1>Hello</h1>
    );
};

export default NameList;