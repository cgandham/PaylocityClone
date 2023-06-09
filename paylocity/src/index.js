import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import EmpDependentsFormContainer from './Containers/EmpDependentsFormContainer/EmpDependentsFormContainer';
import PayCheckContainer from './Containers/previewPaycheckContainer.js/PayCheckContainer';
import EmpDetailsContainer from './Containers/EmpDetailsContainer/EmpDetailsContainer';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<EmpDetailsContainer />} />
        <Route path="/myPaycheck" element={<EmpDetailsContainer />} />
        <Route path="/paychecks" element={<PayCheckContainer />} />
        <Route path="/employeeForm" element={<EmpDependentsFormContainer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
