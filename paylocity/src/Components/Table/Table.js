import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { url } from './Constants';

const Wrapper = styled.div`
  padding: 5px;

`;

function Table(props) {

  const [show, setShow] = useState(false);

  useEffect(() => {


  }, []);
  console.log(props.userData);

  return (
    <Wrapper>
      <table responsive striped condensed hover >
        <thead>
          <tr>
            <th> </th>
            <th> Employee Number </th>
            <th> Employee Name</th>
            <th> Deduction Per Paycheck  </th>
            <th> Amount Paid Per Paycheck  </th>
            <th> Deduction Per Year </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.userData && props.userData.map((emp) => {
            return <tr>
              <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
              <td> {emp.user.id}</td>
              <td> {emp.user.name}</td>
              <td> {emp.deductionPerPaycheck}</td>
              <td> {emp.costPaidAfterDeduction}</td>
              <td> {emp.deductionPerYear}</td>
            </tr>

          })}
        </tbody>
      </table>



    </Wrapper>
  );
}

export default Table;
