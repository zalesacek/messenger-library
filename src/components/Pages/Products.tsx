import React, { useState } from 'react';
import Products1 from '../Products/Products1';
import Products2 from '../Products/Products2';

export interface ProductsConfig {
  config: {
    containerWidth: string;
    cardsInRow: string;
    gap: string;
    cardsBorder: string;
    borderRadius: string;
  }  
}

const Products = () => {
  const [config, setConfig] = useState({
      containerWidth: '100%',
      cardsInRow: '4',
      gap: '15px',
      cardsBorder: '1px solid #ccc',
      borderRadius: '0px',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value })        
  };

  return (
    <div className="content content-w-settings">

      <div className="list">
        <div className="list__item">
          <Products1 config={config} />
        </div>
        {/* <div className="list__item">
          <Products2 config={config} />
        </div> */}
      </div>

      <div className="settings">
        <h2 className="settings__caption">Component Settings</h2>

        <div className="form-field">
          <label>Container max width</label>
          <input type="text" value={config.containerWidth} name="containerWidth" onChange={onChange} />
        </div> 

        <div className="form-field">
          <label>Cards in row</label>
          <input type="text" value={config.cardsInRow} name="cardsInRow" onChange={onChange} />
        </div>

        <div className="form-field">
          <label>Gap</label>
          <input type="text" value={config.gap} name="gap" onChange={onChange} />
        </div>

        <div className="form-field">
          <label>Card's border</label>
          <input type="text" value={config.cardsBorder} name="cardsBorder" onChange={onChange} />
        </div>

        <div className="form-field">
          <label>Border radius</label>
          <input type="text" value={config.borderRadius} name="borderRadius" onChange={onChange} />
        </div>
        
      </div>

    </div>
  );
}

export default Products;
