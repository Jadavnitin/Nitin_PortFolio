import React from 'react'
import styled from 'styled-components';
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../reducers/themeSlice';
import { toggleLanguage } from '../reducers/languageSlice';
import languageContent from '../data/languageContent';

const FooterSection = () => {
   const dispatch = useDispatch();
   const isDark = useSelector((state) => state.theme.isDark);
   const isLanguage = useSelector((state) => state.language.language);
   const footerTextMade = languageContent.footerTextMade[isLanguage === "hi" ? 'hi' : 'en'];
   const footerTextWith = languageContent.footerTextWith[isLanguage === "hi" ? 'hi' : 'en'];
   return (
      <FooterWrapper>
         <MadeBy>
            <p>
               {footerTextMade}{' '}
               <a href="https://github.com/Jadavnitin" target="_blank" rel="noreferrer">
                  {languageContent.name[isLanguage === "hi" ? 'hi' : 'en']}
               </a>{' '}
               {footerTextWith}{' '}
               <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  React.js
               </a>
            </p>
            <img
               src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
               alt="Red Heart"
            />
         </MadeBy>

         <ActionButtons>
            <IconButton aria-label="Change language" onClick={() => dispatch(toggleLanguage())}>
               <Icon icon={isLanguage === 'hi' ? 'emojione:flag-for-india' : 'circle-flags:us'} width="20" height="20"/>
            </IconButton>
            <IconButton aria-label="Dark mode" onClick={() => dispatch(toggleTheme())}>
               <Icon icon={isDark ? 'tabler:moon' : 'tabler:sun'} width="20" height="20" />
            </IconButton>
            <IconButton aria-label="Infos">
               <Icon icon="tabler:info-circle" />
            </IconButton>
         </ActionButtons>
      </FooterWrapper>
   )
}

export default FooterSection




const FooterWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  margin-top: 2rem;
  padding-block:1rem;
  text-align: center;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const MadeBy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  a {
    text-decoration: none;
    font-size: .75rem;
    line-height: 1rem;
    font-weight:700;
    color: ${({ theme }) => theme.techCardText};
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 23px;
    height: 23px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem;
  font-size: .75rem;
  line-height: 1rem;
  border-radius: 0.375rem;
  border: none;
  background: transparent;
  color:#735557;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    transform:scale(1.15);
  }



  .iconify {
    height: 1.25rem;
    width: 1.25rem;
    flex-shrink: 0;
  }
`;
