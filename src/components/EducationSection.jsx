import React from 'react'
import { Icon } from "@iconify/react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import languageContent from '../data/languageContent';
import educationData from '../data/education';


const EducationSection = () => {
  
    const isLanguage = useSelector((state) => state.language.language);
    const langKey = isLanguage === "hi" ? 'hi' : 'en';
  const eduHeader = languageContent.educationHeader[langKey];
  
  
  return (
     <Wrapper id="Education">
        <EducationContainer>

           <EducationAnchorWrapper href="#Education">
              <EducationHeader>
                 <EducationLinkIcon icon="tabler:link" />
            <EducationName>{eduHeader}</EducationName>
              </EducationHeader>
           </EducationAnchorWrapper>
           
        {educationData.map((edu, index) => (
          <EducationDetailsContainer key={index}>
            <EducationDetails>
              <SchoolHeader>
                <SchoolNameLink href={edu.schoolLink[langKey]}>
                  {edu.schoolName[langKey]}
                </SchoolNameLink>
                <MobileOnlyDate>{edu.date.mobile[langKey]}</MobileOnlyDate>
              </SchoolHeader>
              <CourseInfo>{edu.course[langKey]}</CourseInfo>
            </EducationDetails>
            <EducationMeta>
              <DesktopOnlyDate>{edu.date.desktop[langKey]}</DesktopOnlyDate>
            </EducationMeta>
          </EducationDetailsContainer>
        ))}

           
           
        </EducationContainer>
     </Wrapper>
  )
}

export default EducationSection

const EducationDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

 @media (max-width:480px){
    width:100%;
  }
`;

const SchoolHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  
   @media (max-width:480px){
    flex-direction: column-reverse;
    width:100%;
  }
  
`;

const SchoolNameLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
   @media (max-width:480px){
    align-self: flex-start;
  }
`;

const MobileOnlyDate = styled.p`
  display: block;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    display: none;
  }
   @media (max-width:480px){
    width:100%;
  }
`;

const CourseInfo = styled.p`
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const EducationMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.125rem;
`;

const DesktopOnlyDate = styled.p`
  display: none;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    display: block;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1rem 1rem 1rem;
  
  
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
   @media (max-width: 480px) {
     gap:1rem;
  }
`;

const EducationHeader = styled.div`
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

const EducationLinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  color: ${({ theme }) => theme.text};
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const EducationName = styled.h2`
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

const EducationAnchorWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap:0.75rem;
`;