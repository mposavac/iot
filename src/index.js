import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes/Routes';
import initFirebase  from './firebase/initFirebase';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routes/>
);
