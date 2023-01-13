import React from 'react'
import ReactDOM from 'react-dom/client'
import  { App } from './App'
import './assets/styles/global.scss'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
