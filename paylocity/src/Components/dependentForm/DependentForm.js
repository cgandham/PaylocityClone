import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DEPENDENT_TYPES from '../../Utils/Constants'
import { users, url } from './Constants';

const Wrapper = styled.div`
  padding: 5px;
`;

function DependentForm(props) {

    useEffect(() => {

    }, []);


    const changeDependentName = (event) => {
        props.changeDependentName(props.dep.id, event.target.value);
    };

    const changeDependentType = (event) => {
        props.changeDependentType(props.dep.id, event.target.value);
    };

    const deleteDependent = () => {
        props.deleteDependent(props.dep.id);
    }

    return (
        <Wrapper>
            <div>Dependent Name</div>
            <input type="text" value={props.dep.name} onChange={changeDependentName} />
            <select
                value={props.dep.type}
                onChange={changeDependentType}
            >
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
            </select>
            <button onClick={deleteDependent}>Delete dependent</button>
        </Wrapper>
    );
}

export default DependentForm;
