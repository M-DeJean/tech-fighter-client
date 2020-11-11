import React from 'react';
import ReactDOM from 'react-dom';
import Fighter from '../components/Fighter/Fighter';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><Fighter /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});