import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.tsx'
import "antd/dist/reset.css";
import React from 'react';
const App = React.lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)
