import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { url } from './constants';
import Table from '../../Components/Table/Table';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  input[type="text"] {
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #3e8e41;
  }
`;


function EmpDetailsContainer(props) {
    const [empID, setEmployeeID] = useState("");
    const [userData, setUserData] = useState([]);
    useEffect(() => {

    }, [userData]);


    const changeEmpID = (event) => {
        setEmployeeID(event.target.value);
    };

    const getData = async () => {
        fetch(url + empID, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://localhost:3000'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(data => {
                let paycheck = [];
                paycheck.push(data);
                setUserData(paycheck);
            })
            .catch(err => {
                console.log(err)
            })
    };

    const previewPaycheck = () => {
        getData();
    }

    return (
        <Wrapper>

            <div>Employee ID</div>
            <input type="text" value={empID} onChange={changeEmpID} />

            <button onClick={previewPaycheck}>Show my paycheck</button>
            <div>
                {Object.keys(userData).length ? (
                    <Table userData={userData} />
                ) : (
                    null
                )}
            </div>
        </Wrapper>
    );
}

export default EmpDetailsContainer;
