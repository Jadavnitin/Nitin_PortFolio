import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import ProjectsList from './ProjectsList';
import projectData from '../data/projectInfo';
import styled, { css } from 'styled-components';
import languageContent from '../data/languageContent';
import { useSelector } from 'react-redux';

const ProjectsSection = () => {
  
  const isLanguage = useSelector((state) => state.language.language);
  
 
  const lang = languageContent.projectsText[isLanguage === "hi" ? 'hi' : 'en'];

  const langHeader = languageContent.projectsHeader[isLanguage === "hi" ? 'hi' : 'en'];
  
  const [activeFilter, setActiveFilter] = useState(lang.filters[Object.keys(lang.filters)[0]]);
  const [showAll, setShowAll] = useState(false);
 

  useEffect(() => {
    setActiveFilter(lang.filters[0]); 
  }, [lang.filters]);

  

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const filteredProjects = showAll
    ? projectData
    : projectData.filter(project =>
      project.categories[isLanguage].includes(activeFilter)  
    );
 
  
  return (
    <ProjectsContainer>
      <LinkWrapper href="#projects">
        <LinkContainer>
          <LinkIcon icon="tabler:link" />
          <LinkText>{langHeader}</LinkText>
        </LinkContainer>
      </LinkWrapper>

      <ButtonGroup>
        {lang.filters.map((btn) => (
          <StyledButton
            key={btn}
            $active={activeFilter === btn}
            onClick={() => {
              setActiveFilter(btn);
              setShowAll(false);
            }}
          >
            {btn}
          </StyledButton>
        ))}
      </ButtonGroup>

      <ProjectsList projects={filteredProjects} />

      <ButtonWrapper>
        <Button type="button" onClick={toggleShowAll}>
          <ArrowIcon
            rotate={showAll ? 1 : 0}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-6h6v6z" />
            <path d="M15 3h-6" />
          </ArrowIcon>
          {showAll ? lang.showLess : lang.showAll}
        </Button>
      </ButtonWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;



const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  font-size: 0.875rem;
  gap:0.25rem;
  padding: 8px 18px;
  color: ${({ theme }) => theme.projectBtnText};
  background-color: ${({ theme }) => theme.projectBtn};
  border-radius: 8px;
  text-decoration: none;
  
   &:hover {
    background-color: ${({ theme }) => theme.hoverProjectBtn};
  }


  & svg {
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;


const ArrowIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  stroke:currentColor;
  fill:${({ theme }) => theme.projectBtnText};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}
`;


const ProjectsContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
   @media (max-width:480px) {
    gap:1rem;
  }
  
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  color: ${({ theme }) => theme.text};
  left:-20px;
  width: 1rem;
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const LinkText = styled.h2`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.text};
  font-size: 1.75rem;

  @media (max-width: 580px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 325px) {
    font-size: 1.3rem;
  }
  
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.projectBtnText};
  background-color: ${({ $active, theme }) => $active ? theme.hoverProjectBtn : theme.projectBtn};

  &:hover {
    background-color: ${({ theme }) => theme.hoverProjectBtn};
  }
`;
