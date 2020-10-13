import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { FighterProvider } from './context/FighterContext'

ReactDOM.render(
    <BrowserRouter>
        <FighterProvider>
            <App />
        </FighterProvider>
    </BrowserRouter>,
    document.getElementById('root'));
