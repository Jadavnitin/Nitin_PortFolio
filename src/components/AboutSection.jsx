import React from 'react'
import styled from 'styled-components';
import { Icon } from "@iconify/react";
import languageContent from '../data/languageContent';
import { useSelector } from 'react-redux';

const AboutSection = () => {
  
  const isLanguage = useSelector((state) => state.language.language);
  
  return (
  <Wrapper>
      <AboutContainer>
        <LinkIcon icon="tabler:link" />
        <AboutHeader>{languageContent.aboutHeader[isLanguage === "hi" ? 'hi' : 'en']}</AboutHeader>
        <AboutText dangerouslySetInnerHTML={{ __html: languageContent.aboutText[isLanguage === "hi" ? 'hi' : 'en'] }}>

        </AboutText>
        </AboutContainer>
     </Wrapper>
  )
}

export default AboutSection

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-inline: 1rem;

  @media (max-width: 580px) {
    padding-inline: 0.75rem;
  }

  @media (max-width: 325px) {
    padding-inline: 0.5rem;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 580px) {
    gap: 1.25rem;
  }

  @media (max-width:480px) {
    gap:1rem;
  }
`;

const LinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  top: 9px;
  width: 1rem;
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;

  @media (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
    left: -18px;
    top: 7px;
  }

  @media (max-width: 325px) {
    width: 0.85rem;
    height: 0.85rem;
    left: -16px;
    top: 6px;
  }
`;

const AboutHeader = styled.h3`
  cursor: pointer;
  align-self: flex-start;
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

const AboutText = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.999rem;
  line-height: 1.5rem;
  max-width: 100%;
  text-align: justify;

  @media (max-width: 580px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4rem;
    word-spacing:-0.15rem;
  }

  @media (max-width: 325px) {
    font-size: 0.85rem;
    line-height: 1.35rem;
  }
`;
