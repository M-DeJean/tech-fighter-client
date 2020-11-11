import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from '../routes/Statistics/Statistics';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><Statistics /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});