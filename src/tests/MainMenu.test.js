import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MainMenu from '../routes/MainMenu/MainMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><MainMenu /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});