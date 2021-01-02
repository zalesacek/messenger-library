import React, { useState } from 'react';
import Header from '../Headers/Header';
import Header2 from '../Headers/Header2';

export interface HeaderConfig {
  config: {
    height: string;
    containerWidth: string;
  }  
}

const Headers = () => {
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
          <Header config={config} />
        </div>
        <div className="list__item">
          <Header2 config={config}/>
        </div>
      </div>

      <div className="settings">
        <h2 className="settings__caption">Component Settings</h2>

        <div className="form-field">
          <label>Header height</label>
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

export default Headers;
