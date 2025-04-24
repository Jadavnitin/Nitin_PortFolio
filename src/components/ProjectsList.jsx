import React from 'react';
import styled from 'styled-components';
import { FaCamera } from "react-icons/fa";
import { useSelector } from 'react-redux';
import languageContent from '../data/languageContent';

const renderCustomIcon = (name) => {
  switch (name) {
    case "FaCamera":
      return <FaCamera style={{ width: "2rem", height: "2rem", color: "#599759" }} />;
    default:
      return null;
  }
};

const ProjectsList = ({ projects }) => {
  const isLanguage = useSelector((state) => state.language.language);
  const currentLang = isLanguage === "hi" ? "hi" : "en";
  const projectsGitBtn = languageContent.projectsGitBtn[isLanguage === "hi" ? 'hi' : 'en'];
  const projectsLiveBtn = languageContent.projectsLiveBtn[isLanguage === "hi" ? 'hi' : 'en']; 
  return (
    <>
      {projects.map((project, index) => (
        <Container key={index}>
          <ProjectWrapper>
            <Header>
              <ProjectLink href={project.link} target="_blank">
                {project.title[currentLang]}
              </ProjectLink>
              <TechStackAndYear>
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <TechItem key={index}>
                      {tech.iconSrc ? (
                        <TechSvg src={tech.iconSrc} alt={tech.name} style={tech.style} />
                      ) : tech.customIcon ? (
                        renderCustomIcon(tech.customIcon)
                      ) : (
                        <TechIcon className={tech.iconClass} style={tech.style} />
                      )}
                      <TechLabel className="tooltip">{tech.name}</TechLabel>
                    </TechItem>
                  ))}
                </TechStack>
                <Footer>
                  <Year>{project.footerYear}</Year>
                </Footer>
              </TechStackAndYear>
            </Header>
            <DescriptionContainer>
              <Description>{project.description[currentLang]}</Description>
              <LinksContainer>
                <CodeLink href={project.githubLink} target="_blank">{projectsGitBtn}</CodeLink>
                <LiveLink href={project.liveLink} target="_blank">{projectsLiveBtn}</LiveLink>
              </LinksContainer>
            </DescriptionContainer>
            <Image src={project.image} alt={project.title[currentLang]} />
          </ProjectWrapper>
        </Container>
      ))}
    </>
  );
};

export default ProjectsList;


const Image = styled.img`
display: block;
width: 100%;
max-width: 360px;
height: auto;
position: absolute;
bottom: -1px;
right:-71px;
box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
border-radius: 12px 12px 0px 0px;
transition: transform 0.3s, box-shadow 0.3s;

@media (max-width:637px) {
   display:none;
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.projectCardBc};
  border: ${({ theme }) => theme.projectCardBorder};
  overflow: hidden;
  position:relative;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.projectCardHoverBc};
  }

  &:hover ${Image} {
    transform: translateX(-12px) translateY(12px) rotate(-2deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;




const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 0.25rem;
  align-items: flex-start;
`;

const ProjectLink = styled.a`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #52525b;
  
`;

const TechStackAndYear = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  
   @media (max-width:480px) {
     flex-direction: column-reverse;
     gap:0.75rem;
  }
`;


const TechItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .tooltip {
    opacity: 1;
  }
`;

const TechIcon = styled.i`
  font-size: 1.875rem;
`;

const TechSvg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const TechLabel = styled.span`
  opacity: 0;
  transition: all 0.2s ease;
  position: absolute;
  top: -1.1rem;
  right: -2.25rem;
  white-space: nowrap;
  z-index: 10;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: 1px solid rgba(209, 213, 219, 1);
  background-color: #f9fafb;
  color: #374151;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  position: relative;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  width: 50%;
  text-align: justify;
  color: ${({ theme }) => theme.secondaryText};
  
  @media (max-width:637px) {
   width:100%;
  }
   @media (max-width:480px) {
    word-spacing:-0.15rem;
  }
  
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

const CodeLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 8px 16px;
  color: ${({ theme }) => theme.projectBtnText};
  background-color: ${({ theme }) => theme.projectBtn};
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.hoverProjectBtn};
  }
`;

const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 8px 16px;
  color: ${({ theme }) => theme.projectBtnText};
  background-color: ${({ theme }) => theme.projectBtn};
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.hoverProjectBtn};
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.125rem;
  
  @media (max-width:480px) {
   width:100%;
  }
`;

const Year = styled.p`
  font-size: 0.875rem;
  color: #52525b;
  
  @media (max-width:637px) {
   align-self: flex-end;
  }
  
   @media (max-width:480px) {
   align-self: flex-end;
  }
`;
