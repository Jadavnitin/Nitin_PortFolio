import React from 'react';
import styled from 'styled-components';
import { Icon } from "@iconify/react";
import experiences from '../data/experienceinfo';
import { useSelector } from 'react-redux';
import languageContent from '../data/languageContent';

const ExperinceSection = () => {
  const isLanguage = useSelector((state) => state.language.language);
  const langKey = isLanguage === "hi" ? 'hi' : 'en';
  const expHeader = languageContent.experiencesHeader[langKey];
  const techHeader = languageContent.technologiesHeader[isLanguage === "hi" ? 'hi' : 'en']; 
  return (
    <Wrapper id="Experience">
      <ExperienceContainer>
        <ExperienceAnchorWrapper href="#Experience">
          <ExperienceHeader>
            <ExperienceLinkIcon icon="tabler:link" />
            <ExperienceName>{expHeader}</ExperienceName>
          </ExperienceHeader>
        </ExperienceAnchorWrapper>

        {experiences.map((exp, index) => (
          <Container key={index}>
            <Header>
              <HeaderRow>
                <LeftColumn>
                  <LinkRow>
                    <TitleLink href={exp.link} target="_blank" rel="noopener noreferrer">
                      {exp.company[langKey]}
                    </TitleLink>
                    <MobileDate>{exp.mobileDate[langKey]}</MobileDate>
                  </LinkRow>
                  <Role>{exp.role[langKey]}</Role>
                </LeftColumn>
                <RightColumn>
                  {exp.desktopDate.map((line, i) => (
                    <p key={i}>{line[langKey]}</p>
                  ))}
                </RightColumn>
              </HeaderRow>
            </Header>

            <Description>{exp.description[langKey]}</Description>

            <TechHeader>- {techHeader}:</TechHeader>
            <TechList>
              {exp.techs.map(({ name, icon, iconSrc }) => (
                <TechItem key={name[langKey]}>
                  <TechLabel>• {name[langKey]}</TechLabel>
                  <TooltipWrapper>
                    {icon ? (
                      <LanguageIcon className={icon} />
                    ) : (
                      <TechSvg src={iconSrc} alt={name[langKey]} />
                    )}
                    <span className="tooltip">{name[langKey]}</span>
                  </TooltipWrapper>
                </TechItem>
              ))}
            </TechList>
          </Container>
        ))}
      </ExperienceContainer>
    </Wrapper>
  );
};

export default ExperinceSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1rem 1rem 1rem;
`;

const ExperienceContainer = styled.div`
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

const ExperienceHeader = styled.div`
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

const ExperienceLinkIcon = styled(Icon)`
  position: absolute;
  transform: translateX(-1.5rem);
  opacity: 0;
  left: -20px;
  width: 1rem;
  height: 1rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: ${({ theme }) => theme.text};
`;

const ExperienceName = styled.h2`
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

const ExperienceAnchorWrapper = styled.a`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  
 @media (max-width:480px) {
    gap: 0.5rem;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const TitleLink = styled.a`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Role = styled.p`
  color: ${({ theme }) => theme.text};
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.125rem;

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text};

    @media (max-width: 639px) {
      display: none;
    }
  }
`;

const MobileDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
  text-align: justify;
  hyphens: auto;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Description = styled.p`
  font-size: 0.75rem;
  text-align: justify;
  hyphens: auto;
  line-height: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  
   @media (max-width:480px) {
    word-spacing:-0.15rem;
  }
`;

const TechHeader = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const TechList = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
`;

const TechLabel = styled.p`
  margin-right: 0.5rem;
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  .tooltip {
    display: none;
    transition: all 0.2s ease;
    position: absolute;
    top: -1rem;
    white-space: nowrap;
    right: -2rem;
    z-index: 10;
    background-color: #f9fafb;
    color: #1f2937;
    font-size: 0.70rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;

    @media (prefers-color-scheme: dark) {
      background-color: #1f2937;
      color: #e5e7eb;
      border-color: #374151;
    }
  }

  &:hover .tooltip {
    display: flex;
  }
`;

const LanguageIcon = styled.i`
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TechSvg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

