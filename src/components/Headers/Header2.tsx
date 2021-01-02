import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';
import Component from '../Layout/Component';
import { HeaderConfig } from '../Pages/Headers';

const Header2 = (props: HeaderConfig) => {  
  const appContext = useContext(AppContext);
  const { params } = appContext;

  const styles = `
    .header2 {
      background: ${params.colorPrimaryBackground};
      color: ${params.colorPrimaryText};
      font-size: 18px;        
      position: relative;                
    }
    .header2__container {
      width: 100%;
      height: ${props.config.height};
      max-width: ${props.config.containerWidth};
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 15px;
    }
    .header2__logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .header2__logo img {
      max-width: 100%;
      max-height: calc(${props.config.height} - 20px);
      display: block;
    }
    .header2 a {
      color: inherit;
      text-decoration: none;      
    }
    .header2 a:hover {
      text-decoration: underline;      
    }
  `

  const markup = `
    <header class="header2">
      <div class="header2__container">
        <div class="header2__left">
          <a href="tel:+420777888999">+420 <strong>777 888 999</strong></a>
        </div>
        <div class="header2__logo">
            <a href="/">
              <img src="https://via.placeholder.com/180x180" alt="" />
            </a>
        </div>
        <div class="header2__right">
          <a href="mailto:info@promoshop.com"><strong>info@promoshop.com</strong></a>
        </div>
      </div>
    </header>
  `

  const GlobalStyle = createGlobalStyle`
    ${styles.toString()}
  `

  function renderHtml() {
    return {
      __html: markup.toString()
    }
  }

  return (
      <Component 
        globalStyles={<GlobalStyle />}
        name="Header V2"
        component={renderHtml()}
        cssSource={styles.toString()}
        htmlSource={markup.toString()}
      />  
  );
}

export default Header2;
