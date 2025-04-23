import React from 'react';
import { Icon } from "@iconify/react";
import styled from 'styled-components';
import hobbies from '../data/hobbies';
import languageContent from '../data/languageContent';
import { useSelector } from 'react-redux';

const HobbiesSection = () => {
  
  const isLanguage = useSelector((state) => state.language.language);
  const langKey = isLanguage === "hi" ? 'hi' : 'en';
  const hobbiesHeader = languageContent.hobbiesHeader[langKey];
  
  return (
    <Wrapper id="Hobbies">
      <HobbiesContainer>
        <HobbiesAnchorWrapper href="#Hobbies">
          <HobbiesHeader>
            <HobbiesLinkIcon icon="tabler:link" />
            <HobbiesName>{hobbiesHeader}</HobbiesName>
          </HobbiesHeader>
        </HobbiesAnchorWrapper>

        <HobbyTech>
        {hobbies.map((hobby) => (
          <HobbyButton key={hobby.label}>
            <Label>{hobby.label}</Label>
            <StyledIcon icon={hobby.icon} className="icon" />
          </HobbyButton>
        ))}
        </HobbyTech>

      </HobbiesContainer>
    </Wrapper>
  )
}

export default HobbiesSection

const HobbyTech = styled.div`
display: flex;
flex-wrap: wrap;
gap:0.75rem;
`;

const HobbyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6rem;
  flex-direction: column;
  height: 6rem;
  padding: 0.125rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
 font-size: .75rem;
 line-height: 1rem;
  font-weight:700;
  background-color: ${({ theme }) => theme.projectCardBc};
  border: ${({ theme }) => theme.projectCardBorder};
  text-align: center;
  color: ${({ theme }) => theme.techCardText};
  transition: background-color 0.2s, transform 0.2s;
  

   &:hover {
   background-color: ${({ theme }) => theme.projectCardHoverBc};
  }
    
   @media (min-width: 640px) {
      width: 7rem;
      height: 7rem;
    }

`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;
  transition: transform 0.2s ease;
  
  ${HobbyButton}:hover & {
    transform: scale(1.25);
  }
`;


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1rem 1rem 1rem;
`;

const HobbiesContainer = styled.div`
  display: flex;
  gap:0.75rem;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const HobbiesHeader = styled.div`
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

const Label = styled.p`
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.textStone800};
  
  
`;


const HobbiesLinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  color: ${({ theme }) => theme.text};
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const HobbiesName = styled.h2`
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

const HobbiesAnchorWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap:0.75rem;
`;
