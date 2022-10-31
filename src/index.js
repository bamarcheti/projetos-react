import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Navbar from './pages/Navbar/Narbar';
import UserList from './pages/User/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<App />} />
        <Route path='user-list' element={<UserList />} />
      </Route>
    </Routes>
  </HashRouter>
);