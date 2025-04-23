import React from 'react'
import styled from 'styled-components'
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../reducers/themeSlice';
import { toggleLanguage } from '../reducers/languageSlice';
import languageContent from '../data/languageContent';

const IntroductionSection = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const isLanguage = useSelector((state) => state.language.language);


  return (
    <Wrapper id="me">
      <IntroductionContainer>
        <InfoSection>
          <AnchorWrapper href="#me">
            <Header>
              <LinkIcon icon="tabler:link" />
              <Name>{languageContent.name[isLanguage==="hi" ? 'hi' : 'en']}</Name>
            </Header>
          </AnchorWrapper>

          <div>
            <Description>
              {languageContent.description[isLanguage === "hi" ? 'hi' : 'en']}
            </Description>
            <Location>
              <Icon icon="tabler:map-pin-filled" width="16" height="16" />
              {languageContent.location[isLanguage === "hi" ? 'hi' : 'en']}
            </Location>
          </div>

          <ButtonRow>
            <IconLink href="https://github.com/Jadavnitin?tab=repositories" title="GitHub" target="_blank" rel="noopener noreferrer">
              <Icon icon="tabler:brand-github" width="20" height="20" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/nitinjadav2003/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Icon icon="tabler:brand-linkedin" width="20" height="20" />
            </IconLink>
            <IconLink href="tel:+917600345100" title="Phone">
              <Icon icon="tabler:phone" width="20" height="20" />
            </IconLink>
            <IconLink href="mailto:nitinkumarjadav63.com" title="Email">
              <Icon icon="tabler:mail" width="20" height="20" />
            </IconLink>
            <IconLink href="/resume" title="Resume" target="_blank" rel="noopener noreferrer">
              <Icon icon="tabler:file" width="20" height="20" />
            </IconLink>
          </ButtonRow>

          <ButtonRow style={{ marginTop: '0.5rem' }}>


            <IconButton aria-label="Change language" onClick={() => dispatch(toggleLanguage())}>
              <Icon
                icon={isLanguage === 'hi' ? 'emojione:flag-for-india' : 'circle-flags:us'}
                width="20"
                height="20"
              />
            </IconButton>

  
            
            <IconButton aria-label="Dark mode" onClick={() => dispatch(toggleTheme())}>
              <Icon icon={isDark ? 'tabler:moon' : 'tabler:sun'} width="20" height="20" />
            </IconButton>

            <IconButton aria-label="Infos">
              <Icon icon="tabler:info-circle" width="20" height="20" />
            </IconButton>
          </ButtonRow>
        </InfoSection>

        <PhotoWrapper>
          <Photo src="/favicon.svg" alt="Nitin Jadav" />
        </PhotoWrapper>
      </IntroductionContainer>

    </Wrapper>
  );
};

export default IntroductionSection;



const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem 1rem;

  @media (max-width: 580px) {
    padding: 1.5rem 0.75rem;
  }

  @media (max-width: 325px) {
    padding: 1rem 0.5rem;
  }
`;

const IntroductionContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const Header = styled.div`
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

const LinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.text};
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

const Name = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-size: 1.75rem;

  @media (max-width: 580px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }

  @media (max-width: 325px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  max-width: 36rem;
  line-height: 1.5;

  @media (max-width: 580px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 325px) {
    font-size: 0.85rem;
  }
`;

const Location = styled.p`
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 325px) {
    font-size: 0.75rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  color: #735557;
  background-color: ${({ theme }) => theme.accent}15;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.accent}25;
    transform: translateY(-2px);
  }

  @media (max-width: 325px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #735557;
  border: none;
  background-color: ${({ theme }) => theme.accent}15;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.accent}25;
    transform: scale(1.05);
  }

  @media (max-width: 325px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 7rem;
  height: 7rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transition: transform 0.3s;

  @media (min-width: 640px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 325px) {
    width: 5rem;
    height: 5rem;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const AnchorWrapper = styled.a`
  text-decoration: none;
`;
