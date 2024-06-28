import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
  }

  h2 {
    text-align: center;
    color: #343a40;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePage />
      <ProjectsPage />
      <EducationPage />
    </>
  );
};

export default App;

