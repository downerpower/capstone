import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { PictureContextProvider } from './context/pictureContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PictureContextProvider>
      <Router>
        <App />
      </Router>
    </PictureContextProvider>
  </React.StrictMode>
);
