import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createGlobalStyle } from 'styled-components';
import Component from '../Layout/Component';
import { ProductsConfig } from '../Pages/Products';

const Products2 = (props: ProductsConfig) => {  
  const appContext = useContext(AppContext);
  const { params } = appContext;

  const styles = `
    .products2 {
      font-size: 16px;        
      position: relative;                
    }
    .products2__container {
      width: 100%;
      max-width: ${props.config.containerWidth};
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 15px;
    }
    .products-list2 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: calc(100% + 3rem);
      margin: 0 -1.5rem;
    }
    .products-list2__item {
      width: 50%;
      padding: 0 1.5rem;
      margin: 0 0 1.5rem 0;
    }
    @media only screen and (min-width: 768px) {
      .products-list2__item {
        width: calc(100% / ${props.config.cardsInRow});
      }
    }
    .products-list2 .products-card {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      background: #fff;
      padding: 1.5rem;
      border: ${props.config.cardsBorder};
    }
    .products-list2 .products-card__image {
      width: 100%;
      padding-top: 70%;
      position: relative;
    }
    .products-list2 .products-card__image img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }
    .products-list2 .products-card__image a {
      display: block;
      overflow: hidden;
    }
    .products-list2 .products-card__content {
      padding: 2rem 0 0 0;
      color: #131442;
      font-size: 1.5rem;
      line-height: 1.2;
      width: 100%;
      text-align: center;
    }
    .products-list2 .products-card__content a:not(.btn) {
      color: inherit;
    }
    .products-list2 .products-card__title {
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
      .products-list2 .products-card__title {
        font-size: 1.6rem;
      }
    }
    .products-list2 .products-card__title a {
      text-decoration: none;
    }
    .products-list2 .products-card__title a:hover {
      text-decoration: underline;
    }
  `

  const markup = `
    <div class="products2">
      <div class="products2__container">        
        <div class="products-list2">
          
          <article class="products-list2__item">
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
        name="Products V2"
        component={renderHtml()}
        cssSource={styles.toString()}
        htmlSource={markup.toString()}
      />   
  );
}

export default Products2;
