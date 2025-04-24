import React from 'react'
import styled from 'styled-components';
import { Icon } from "@iconify/react";
import certifications from '../data/certifications';
import languageContent from '../data/languageContent';
import { useSelector } from 'react-redux';

const CertificationSection = () => {
  
  const isLanguage = useSelector((state) => state.language.language);
  const certificationHeader = languageContent.certificationsHeader[isLanguage === "hi" ? 'hi' : 'en'];
  const certificationsBtn = languageContent.certificationsBtn[isLanguage === "hi" ? 'hi' : 'en'];
  
  return (
     <Wrapper id="Certification">
      <CertificationContainer>
        
           <CertificationAnchorWrapper href="#Certification">
              <CertificationHeader>
                 <CertificationLinkIcon icon="tabler:link" />
            <CertificationName>{certificationHeader}</CertificationName>
              </CertificationHeader>
                <ButtonWrapper>
                 <StyledButton type="button">
                    <StyledIcon icon="tabler:confetti" />
                    <span>{certificationsBtn}</span>
                 </StyledButton>
              </ButtonWrapper>
        </CertificationAnchorWrapper>
        
        {certifications.map((cert, index) => (
          <Container key={index}>
            <LeftSection>
              <Title
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.title[isLanguage === "hi" ? 'hi' : 'en']}
              </Title>
              

              {cert.descriptions[isLanguage === "hi" ? 'hi' : 'en'].map((desc, i) => (
                <Description
                  key={i}
                  className={i > 0 ? 'mt' : ''}
                  dangerouslySetInnerHTML={{ __html: desc}}
                />
              ))}
            </LeftSection>

            <RightSection>
              <Date>{cert.date[isLanguage === "hi" ? 'hi' : 'en']}</Date>
              <BadgeLink
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BadgeImage src={cert.image} alt={`${cert.title[isLanguage === "hi" ? 'hi' : 'en']} Certificate`} />
                <ExternalIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </ExternalIcon>
              </BadgeLink>
            </RightSection>
          </Container>
        ))}
 
        </CertificationContainer>
     </Wrapper>
  )
}

export default CertificationSection


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1.5rem;
  
   @media (max-width:450px){
    flex-direction: column-reverse;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 75%;
  
  @media (max-width:480px){
    width:100%;
    text-align:justify;
    word-spacing: -0.15rem;
  }

`;

const Title = styled.a`
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width:480px){
    font-size:1.115rem;
  }
  
  @media (max-width:380px){
    white-space:wrap;
    text-align:left;
  }
 
   @media (max-width:325px){
    font-size:1.10rem;
    
  }
`;


const Description = styled.p`
 font-size: .75rem;
 line-height: 1rem;
  color: ${({ theme }) => theme.secondaryText};

  &.mt {
    margin-top: 0.5rem;
  }
  
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.125rem;
  
   @media (max-width:480px){
    width:100%;
    align-items:center;
    gap: 0.750rem;
  }
`;

const Date = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.375rem;
  white-space: nowrap;
  
  @media (max-width:480px) {
   font-size: 0.850rem; 
   align-self: flex-end;
  }
`;

const BadgeLink = styled.a`
  position: relative;
  display: inline-block;

  &:hover svg {
    opacity: 1;
  }
`;

const BadgeImage = styled.img`
  width:9rem;
  height:9rem;
  
  
`;

const ExternalIcon = styled.svg`
  position: absolute;
  top:6.5rem;
  left:-1rem;
  width:1.25rem;
  height: 1.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.text};
 
    @media (max-width:480px) {
   left:-2rem;
  }
`;



const ButtonWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.projectCardBc};
  border: none;
  color: ${({ theme }) => theme.projectBtn};
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s;
  
   &:hover {
    background-color: ${({ theme }) => theme.projectCardHoverBc};
  }

`;

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
`;


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1rem 1rem 1rem;
  
 
  
`;

const CertificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
   @media (max-width:480px) {
    gap:1rem;
  }
`;

const CertificationHeader = styled.div`
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

const CertificationLinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  color: ${({ theme }) => theme.text};
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const CertificationName = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-size: 1.75rem;
  
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CertificationAnchorWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap:0.75rem;
`;
