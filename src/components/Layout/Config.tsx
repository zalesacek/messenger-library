import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';

const Config = () => {

    const appContext = useContext(AppContext);
    const { params } = appContext;

    const GlobalStyle = createGlobalStyle`
        html {
            --color-text: ${params.colorPrimaryText};
            --color-background: ${params.colorPrimaryBackground};
        }
    `
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default Config;


