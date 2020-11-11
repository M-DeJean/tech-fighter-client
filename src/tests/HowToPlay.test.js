import React from 'react';
import ReactDOM from 'react-dom';
import HowToPlay from '../routes/HowToPlay/HowToPlay';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><HowToPlay /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});