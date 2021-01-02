import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';
import Component from '../Layout/Component';
import { HeaderConfig } from '../Pages/Headers';

const Header = (props: HeaderConfig) => {  
  const appContext = useContext(AppContext);
  const { params } = appContext;

  const styles = `
    .header {
        background: ${params.colorPrimaryBackground};
        color: ${params.colorPrimaryText};
        font-size: 18px;        
        position: relative;                
    }
    .header__container {
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
    .header__logo {
      position: relative;    
      flex: 1;
      height: calc(${props.config.height} - 20px);  
    }
    .header__logo img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .header__content {
      text-align: right;   
    }
    .header a {
      color: inherit;
      text-decoration: none;      
    }
    .header a:hover {
      text-decoration: underline;      
    }
  `

  const markup = `
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
            <a href="/">
              <img src="https://via.placeholder.com/180x180" alt="" />
            </a>
        </div>
        <div class="header__content">
          <a href="tel:+420777888999">+420 <strong>777 888 999</strong></a><br />
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
        name="Header V1"
        component={renderHtml()}
        cssSource={styles.toString()}
        htmlSource={markup.toString()}
      />   
  );
}

export default Header;
