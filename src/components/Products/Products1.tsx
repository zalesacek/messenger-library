import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';
import Component from '../Layout/Component';
import { ProductsConfig } from '../Pages/Products';

const Products1 = (props: ProductsConfig) => {  
  const appContext = useContext(AppContext);
  const { params } = appContext;

  const styles = `
    .products {
      font-size: 16px;        
      position: relative;                
    }
    .products__container {
      width: 100%;
      max-width: ${props.config.containerWidth};
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 15px;
    }
    .products-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: 100%;
      gap: ${props.config.gap};
    }
    .products-list__item {
      width: 50%;
      padding: 0;
      margin: 0;
    }
    @media only screen and (min-width: 768px) {
      .products-list__item {
        width: calc(((100% / ${props.config.cardsInRow}) - ${props.config.gap}) + (${props.config.gap} / ${props.config.cardsInRow}));
      }
    }
    .products-list .products-card {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      background: #fff;
      padding: 1.5rem;
      border: ${props.config.cardsBorder};
      border-radius: ${props.config.borderRadius};
    }
    .products-list .products-card__image {
      width: 100%;
      padding-top: 70%;
      position: relative;
    }
    .products-list .products-card__image img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }
    .products-list .products-card__image a {
      display: block;
      overflow: hidden;
    }
    .products-list .products-card__content {
      padding: 2rem 0 0 0;
      color: #131442;
      font-size: 1.5rem;
      line-height: 1.2;
      width: 100%;
      text-align: center;
    }
    .products-list .products-card__title {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.1;
      margin: 0 0 2rem 0;
      padding: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media only screen and (min-width: 991px) {
      .products-list .products-card__title {
        font-size: 1.6rem;
      }
    }
    .products-list .products-card__title a {
      color: #000;
      text-decoration: none;
    }
    .products-list .products-card__title a:hover {
      text-decoration: underline;
    }
    .products-card__button {
      line-height: 1.1;
      letter-spacing: 0;
      border: 2px solid ${params.colorPrimaryBackground};
      outline: none !important;
      border-radius: ${props.config.borderRadius};
      cursor: pointer;
      text-decoration: none !important;
      padding: 10px 25px;
      font-weight: bold;
      display: inline-block;
      color: ${params.colorPrimaryText};
      background: ${params.colorPrimaryBackground};
      position: relative;
      font-size: 15px;
      transition: 0.3s;
      white-space: nowrap;
    }
    .products-card__button:hover {
      border-color: ${params.colorPrimaryBackground};
      color: ${params.colorPrimaryBackground};
      background: ${params.colorPrimaryText};
    }
  `

  const markup = `
    <div class="products">
      <div class="products__container">        
        <div class="products-list">
          
          <article class="products-list__item">
            <div class="products-card">
              <a href="#!" class="products-card__image">
                <img src="http://via.placeholder.com/500x500" alt="">
              </a>
              <div class="products-card__content">
                <h2 class="products-card__title">
                  <a href="#!">Shopping bag with long handles Cottonel</a>
                </h2>
                <div class="products-card__controls">
                  <a href="#!" class="products-card__button">Detail</a>
                </div>
              </div>
            </div>
          </article>     
          
          <article class="products-list__item">
            <div class="products-card">
              <a href="#!" class="products-card__image">
                <img src="http://via.placeholder.com/500x500" alt="">
              </a>
              <div class="products-card__content">
                <h2 class="products-card__title">
                  <a href="#!">Shopping bag with long handles Cottonel</a>
                </h2>
                <div class="products-card__controls">
                  <a href="#!" class="products-card__button">Detail</a>
                </div>
              </div>
            </div>
          </article>

          <article class="products-list__item">
            <div class="products-card">
              <a href="#!" class="products-card__image">
                <img src="http://via.placeholder.com/500x500" alt="">
              </a>
              <div class="products-card__content">
                <h2 class="products-card__title">
                  <a href="#!">Shopping bag with long handles Cottonel</a>
                </h2>
                <div class="products-card__controls">
                  <a href="#!" class="products-card__button">Detail</a>
                </div>
              </div>
            </div>
          </article>

          <article class="products-list__item">
            <div class="products-card">
              <a href="#!" class="products-card__image">
                <img src="http://via.placeholder.com/500x500" alt="">
              </a>
              <div class="products-card__content">
                <h2 class="products-card__title">
                  <a href="#!">Shopping bag with long handles Cottonel</a>
                </h2>
                <div class="products-card__controls">
                  <a href="#!" class="products-card__button">Detail</a>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
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
        name="Products V1"
        component={renderHtml()}
        cssSource={styles.toString()}
        htmlSource={markup.toString()}
      />   
  );
}

export default Products1;
