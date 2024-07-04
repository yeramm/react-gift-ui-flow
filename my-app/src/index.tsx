import './styles'; // 상대 경로로 수정
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 상대 경로로 수정

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
