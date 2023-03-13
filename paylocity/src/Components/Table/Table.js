import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { url } from './Constants';

const Wrapper = styled.div`
  padding: 5px;
  background: papayawhip;
`; 

function Table(props) {

    const [inputValue, setInputValue] = useState("");
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);
    const [userData, setUserData] = useState({});

    const getData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json);
        console.log(json);
    };

    useEffect(() => {
        console.log('useEffect');
        getData();

    },[]);


    const changeInput = (event) => {
        setInputValue(event.target.value);
    };

        return(
            <Wrapper>
                <h1>Paycheck Details</h1>
                <table responsive striped condensed hover >
            <thead>
              <tr>
                <th> </th>
                <th> Assignment </th>
                <th> Submitted On </th>
                <th> Score  </th>
                <th> </th>
              </tr>
            </thead>
            {/* <tbody>
              {homeWorks.map((c) => {
                return <tr>
                  <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                  <td> {c.assignmentname}</td>
                  <td> {c.assignmentenddate}</td>
                  <td> {c.assignmentscrore}</td>
                </tr>

              })}
            </tbody> */}
          </table>
                
                

            </Wrapper>
        );
}

export default Table;
