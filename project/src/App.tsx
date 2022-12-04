import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './_App.scss';

import HomePage from 'pages/homepage';
import AboutPage from 'pages/about';
import NotFoundPage from 'pages/404';
import FormPage from 'pages/formpage';

import Layout from 'components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="formpage" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="404" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
