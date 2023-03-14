import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { url } from './Constants';

const Wrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

`;

function Table(props) {

  const [show, setShow] = useState(false);

  useEffect(() => {


  }, []);

  return (
    <Wrapper>
      <table responsive striped condensed hover >
        <thead>
          <tr>
            <th> </th>
            <th> Employee ID </th>
            <th> Employee Name</th>
            <th> Deduction Per Paycheck  </th>
            <th> Amount Paid Per Paycheck  </th>
            <th> Deduction Per Year </th>
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
