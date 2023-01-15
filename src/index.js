import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IncrementDecrement from './Increment-Decrement';
import UpperLowerCase from './Upper-LowerCase/index';
import RegistartionForm from './Registartion-Form/index';
import TopHeader from './TopHeader/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopHeader />
    <IncrementDecrement />
    <UpperLowerCase />
    <RegistartionForm />
  </React.StrictMode>
);