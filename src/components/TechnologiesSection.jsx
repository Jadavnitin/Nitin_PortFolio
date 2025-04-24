import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from "@iconify/react";
import techs from '../data/technologies';
import { FaCamera } from "react-icons/fa";
import { useSelector } from 'react-redux';
import languageContent from '../data/languageContent';

const renderCustomIcon = (name) => {
   switch (name) {
      case "FaCamera":
         return <FaCamera style={{ width: "3rem", height: "3rem", color: "#599759" }} />;
      default:
         return null;
   }
};


const TechnologiesSection = () => {
  const isLanguage = useSelector((state) => state.language.language);
  const lang = languageContent.technologiesText[isLanguage === "hi" ? 'hi' : 'en'];
  const techHeader = languageContent.technologiesHeader[isLanguage === "hi" ? 'hi' : 'en'];

  const [activeFilter, setActiveFilter] = useState(lang.filters[Object.keys(lang.filters)[0]]);
  
    useEffect(() => {
      setActiveFilter(lang.filters[0]); 
    }, [lang.filters]);
  

   return (
     <Wrapper id="Technologies">
         <TechnologiesContainer>
            <TechnologiesAnchorWrapper href="#Technologies">
               <TechnologiesHeader>
                  <TechnologiesLinkIcon icon="tabler:link" />
             <TechnologiesName>{techHeader}</TechnologiesName>
               </TechnologiesHeader>
            </TechnologiesAnchorWrapper>

            <ButtonGroup>
           {lang.filters.map((btn) => (
                  <StyledButton
               key={btn}
               $active={activeFilter === btn}
               onClick={() => setActiveFilter(btn)}>
                     {btn}
                  </StyledButton>
               ))}
            </ButtonGroup>

            <TechGrid>
               {techs
                  .filter((tech) => tech.category[isLanguage] === activeFilter)
                  .map((tech) => (
                     <TechCard key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer">
                        <p>{tech.name}</p>
                        {tech.icon.startsWith('/') || tech.icon.endsWith('.svg') || tech.icon.endsWith('.png') ? (
                           <img src={tech.icon} alt={tech.name} style={{ width: '3rem', height: '3rem' }} />
                        ) : tech.icon.startsWith('devicon-') ? (
                           <i className={tech.icon}></i>
                        ) : (
                           renderCustomIcon(tech.icon)
                        )}
                        <TechLabel>{tech.name}</TechLabel>
                     </TechCard>
                  ))}
            </TechGrid>
         </TechnologiesContainer>
      </Wrapper>
   );
};

export default TechnologiesSection;


const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const TechCard= styled.a`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 6rem;
  height: 6rem;
  gap: 0.25rem;
  padding: 0.125rem;
  border-radius: 0.375rem;
  font-size: .75rem;
  line-height: 1rem;
  font-weight:700;
  background-color: ${({ theme }) => theme.projectCardBc};
  border: ${({ theme }) => theme.projectCardBorder};
  text-align: center;
  color: ${({ theme }) => theme.techCardText};
  text-decoration: none;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.projectCardHoverBc};
  }

  i {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    width:9rem;
    height:9rem;
  }
  
   @media (max-width:420px) {
    width:100%;
    gap:0.75rem;
  }
`;

const TechLabel = styled.span`
  position: absolute;
  top: -1rem;
  right: -2rem;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #f9fafb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  z-index: 10;

  ${TechCard}:hover & {
    opacity: 1;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    color: #f3f4f6;
    border-color: #4b5563;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  
  @media (max-width: 480px) {
    gap:0.5rem;
  }
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

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1rem 1rem 1rem;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TechnologiesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TechnologiesLinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  color: ${({ theme }) => theme.text};
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const TechnologiesName = styled.h2`
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

const TechnologiesAnchorWrapper = styled.a`
  text-decoration: none;
`;
