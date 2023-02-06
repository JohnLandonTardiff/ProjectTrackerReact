import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectsPage } from './ProjectsPage/ProjectsPageComponent';
import { GoalsPage } from './GoalsPage/GoalsPageComponent';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './ModalStyles.css';
import './DataPageStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<GoalsPage />} />
    </Routes>
  </HashRouter>
);
