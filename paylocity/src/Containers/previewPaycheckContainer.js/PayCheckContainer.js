import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Table from '../../Components/Table/Table';
import { url } from './Constants';

const Wrapper = styled.div`
  padding: 5px;
  background: papayawhip;
`; 

function PayCheckContainer(props) {

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
                <Table />
            </Wrapper>
        );
}

export default PayCheckContainer;
