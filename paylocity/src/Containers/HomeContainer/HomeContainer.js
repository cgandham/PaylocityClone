import React, {useState} from 'react';
import styled from 'styled-components';
import { users, url } from './Constants';

import DependentForm from '../../Components/dependentForm/DependentForm';

const Wrapper = styled.div`
  padding: 5px;
  background: #80808047;
`; 

function HomeContainer (){
    const [inputValue, setInputValue] = useState("");
    const [userName, setUserName] = useState("");
    const [show, setShow] = useState(false);
    const changeInput = (event) => {
        setInputValue(event.target.value);
    };



  const [value, setValue] = useState("Passed from Parent");
        return(
            <Wrapper>
                <h1>Welcome! Enter your Details</h1>
                <div>Name</div>
                <input type="text" value={inputValue} onChange={changeInput}/>

              
                
                {/* <button onClick={() => setShow(!show)}>Click to toggle element below</button>
                {show && <div>Boo, Hi!</div>} */}
          
                <button disabled={inputValue.length < 1}>Preview Paycheck</button>
                

            </Wrapper>
        )
}

export default HomeContainer;