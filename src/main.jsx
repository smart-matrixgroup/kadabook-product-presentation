import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App.jsx';
import Presenter from './Presenter.jsx';
import './styles.css';

const isPresenter = new URLSearchParams(location.search).has('presenter');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">{isPresenter ? <Presenter /> : <App />}</MotionConfig>
  </React.StrictMode>,
);
