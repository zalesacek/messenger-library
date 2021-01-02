import React, { useState } from 'react';
import Footer from '../Footers/Footer';

export interface FooterConfig {
  config: {
    height: string;
    containerWidth: string;
  }  
}

const Footers = () => {
  const [config, setConfig] = useState({
      height: '80px',
      containerWidth: '100%',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value })        
  };

  return (
    <div className="content content-w-settings">

      <div className="list">
        <div className="list__item">
          <Footer config={config} />
        </div>
      </div>

      <div className="settings">
        <h2 className="settings__caption">Component Settings</h2>

        <div className="form-field">
          <label>Footer height</label>
          <input type="text" value={config.height} name="height" onChange={onChange} />
        </div> 

        <div className="form-field">
          <label>Container max width</label>
          <input type="text" value={config.containerWidth} name="containerWidth" onChange={onChange} />
        </div> 
        
      </div>

    </div>
  );
}

export default Footers;
