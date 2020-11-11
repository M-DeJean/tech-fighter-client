import React from 'react';
import ReactDOM from 'react-dom';
import Contestants from '../routes/Contestants/Contestants';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <BrowserRouter><Contestants /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});