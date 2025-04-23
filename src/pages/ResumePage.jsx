import React from 'react'
import styled from 'styled-components';
import IntroductionSection from '../components/IntroductionSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperinceSection from '../components/ExperinceSection';
import TechnologiesSection from '../components/TechnologiesSection';
import CertificationSection from '../components/CertificationSection';
import EducationSection from '../components/EducationSection';
import HobbiesSection from '../components/HobbiesSection';
import FooterSection from '../components/FooterSection';

const ResumePage = () => {
   
 
   
   
  return (
     <MainContainer>
        <Container>
           <IntroductionSection />
           <AboutSection />
           <ProjectsSection />
           <ExperinceSection />
           <TechnologiesSection />
           <CertificationSection />
           <EducationSection />
           <HobbiesSection />
           <FooterSection/>
        </Container>
    </MainContainer>
  )
}

export default ResumePage

const MainContainer = styled.div`
margin-inline:auto;
min-height:100vh;
padding-inline: 1rem;
padding-top:4rem;
 
`;

const Container = styled.section`
  margin-inline: auto;
  min-height: 100vh;
  width: 100%;
  max-width: clamp(280px, 90%, 800px);
`;


