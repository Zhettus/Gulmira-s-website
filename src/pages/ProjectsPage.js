import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  background-color: #e9ecef;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
`;

const Project = ({ project, onClick }) => (
  <ProjectCard onClick={() => onClick(project)}>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </ProjectCard>
);

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: 'Project 1', description: 'Description 1', fullText: 'Full description 1' },
    { title: 'Project 2', description: 'Description 2', fullText: 'Full description 2' },
    { title: 'Project 3', description: 'Description 3', fullText: 'Full description 3' },
    { title: 'Project 4', description: 'Description 4', fullText: 'Full description 4' },
    { title: 'Project 5', description: 'Description 5', fullText: 'Full description 5' },
    { title: 'Project 6', description: 'Description 6', fullText: 'Full description 6' },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Проекты</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <Project key={index} project={project} onClick={setSelectedProject} />
        ))}
      </ProjectGrid>

      {selectedProject && (
        <ProjectDetail onClick={() => setSelectedProject(null)}>
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullText}</p>
          </div>
        </ProjectDetail>
      )}
    </ProjectsContainer>
  );
};

export default ProjectsPage;
