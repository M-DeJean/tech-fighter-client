import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Versus from '../components/Versus/Versus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><Versus /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});