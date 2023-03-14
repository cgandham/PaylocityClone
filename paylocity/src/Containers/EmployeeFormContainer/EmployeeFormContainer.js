import React, { useState } from 'react';
import styled from 'styled-components';
import { backgroundColor } from '../../Utils/Constants';
import DependentForm from '../../Components/dependentForm/DependentForm';
import { v4 as uuidv4 } from 'uuid'; // using uuid library

const Wrapper = styled.div`
  padding: 5px;
  background:${backgroundColor} ;
`;

function EmployeeFormContainer() {
    const [userName, setUserName] = useState("");
    const [dependents, setDependents] = useState([]);


    const changeUserName = (event) => {
        setUserName(event.target.value);
    };

    const addDependent = () => {
        const newDependent = {
            id: uuidv4(),
            name: "",
            type: ""
        }; 
        setDependents([...dependents, newDependent]);
    }

    const updateDependent = (index, dep) => {
        const newState = [
            ...dependents.slice(0, index),
            { ...dependents[index], ...dep },
            ...dependents.slice(index + 1)
          ];
        setDependents(newState);
    }

    const changeDependentName = (id, name) => {
        const index = dependents.findIndex(obj => obj.id === id);
        if (index === -1) return; 
        const newDependent = {
            id: id,
            name: name,
            type: dependents[index].type
        }; 
        updateDependent(index, newDependent);
    };

    const changeDependentType = (id, type) => {
        const index = dependents.findIndex(obj => obj.id === id);
        if (index === -1) return; 
        const newDependent = {
            id: id,
            name: dependents[index].name,
            type: type
        }; 
        updateDependent(index, newDependent);
    };

    const deleteDependent = (id) => {
        setDependents(dependents.filter(x => x.id !== id));
    }

    const previewPaycheck = (event) => {

    };

    const [value, setValue] = useState("Passed from Parent");

    return (
        <Wrapper>
            <h1>Welcome! Enter your Details</h1>
            <div>Name</div>
            <input type="text" value={userName} onChange={changeUserName} />
            <button onClick={addDependent}>Add Dependents</button>
            {dependents.map((dep) => {
                return <DependentForm 
                          dep={dep}
                          deleteDependent={deleteDependent}
                          changeDependentName={changeDependentName} 
                          changeDependentType={changeDependentType} />
            })}



            {/* <button onClick={() => setShow(!show)}>Click to toggle element below</button>
                {show && <div>Boo, Hi!</div>} */}

            <button onClick={previewPaycheck} disabled={userName.length < 1}>Preview Paycheck</button>


        </Wrapper>
    )
}

export default EmployeeFormContainer;