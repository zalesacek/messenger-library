import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';
import Component from '../Layout/Component';
import { FooterConfig } from '../Pages/Footers';

const Footer = (props: FooterConfig) => {  
  const appContext = useContext(AppContext);
  const { params } = appContext;

  const styles = `
    .footer {
      background: ${params.colorPrimaryBackground};
      color: ${params.colorPrimaryText};
      font-size: 18px;        
      line-height: 1.6;
      position: relative;  
      text-align: center;              
    }
    .footer__container {
      width: 100%;
      height: ${props.config.height};
      max-width: ${props.config.containerWidth};
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 15px;
    }
    .footer a {
      color: inherit;
      text-decoration: none;      
    }
    .footer a:hover {
      text-decoration: underline;      
    }
  `

  const markup = `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__content">
          <a href="tel:+420777888999">+420 <strong>777 888 999</strong></a><br />
          <a href="mailto:info@promoshop.com"><strong>info@promoshop.com</strong></a>
        </div>
      </div>
    </footer>
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
        name="Footer V1"
        component={renderHtml()}
        cssSource={styles.toString()}
        htmlSource={markup.toString()}
      />   
  );
}

export default Footer;
