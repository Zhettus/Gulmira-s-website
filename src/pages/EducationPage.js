import React, { useState } from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 3rem;
  background-color: #e9ecef;
  position: relative;

`;

const EducationCard = styled.div`
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 5rem;
  display: inline-block;
  width: 500px;
  margin-right: 1rem;

`;


const EducationCardText = styled.div`
  /* Target specific elements if needed, like headings or paragraphs */
  h1,
  h2,
  p {
    text-align: left;
  }
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: 1rem;' : 'right: 1rem;')}
`;

const EducationPage = () => {
  const [index, setIndex] = useState(0);

  const education = [
    { title: 'Degree 1', description: 'Description 1' },
    { title: 'Degree 2', description: 'Description 2' },
    { title: 'Degree 3', description: 'Description 3' },
    { title: 'Degree 4', description: 'Description 4' },
    { title: 'Degree 5', description: 'Description 5' },
  ];

  const next = () => setIndex((index + 1) % education.length);
  const prev = () => setIndex((index - 1 + education.length) % education.length);

  return (
    <EducationContainer id="education">
      <h2>Образование</h2>
      <Arrow left onClick={prev}>
        &lt;
      </Arrow>
      <EducationCard>
        <h3>{education[index].title}</h3>
        <p>{education[index].description}</p>
      </EducationCard>
      <Arrow onClick={next}>
        &gt;
      </Arrow>
    </EducationContainer>
  );
};

export default EducationPage;
