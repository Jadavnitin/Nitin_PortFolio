import React from 'react';
import ResumePage from './pages/ResumePage';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../src/theme/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: 'Arial', sans-serif;
    transition: all 0.25s ease-in-out;

    h1, h2, h3, h4, h5, h6 {
    font-family: "ui-sans-serif", system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    }

    p ,button,a{
      font-family: "ui-monospace", Consolas, Liberation Mono, monospace;
    }

    h1, h2, h3, h4, h5, h6, p, span, div, li{
      margin: 0;
      padding: 0;
    }
  }
`;

const App = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ResumePage />
    </ThemeProvider>
  );
};

export default App;
