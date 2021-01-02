import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const Settings = () => {
    const [settings, setSettings] = useState({
        colorPrimaryBackground: 'red',
        colorPrimaryText: 'white',
    })
    const appContext = useContext(AppContext);
    const { params, changeSettings } = appContext;

    useEffect(() => {
        const getParams = () => {
            setSettings({
                colorPrimaryBackground: params.colorPrimaryBackground,
                colorPrimaryText: params.colorPrimaryText,
            });     
        };
        getParams()      
        // eslint-disable-next-line
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({ ...settings, [e.target.name]: e.target.value })        
    };

  return (
    <div className="settings">
      <h2 className="settings__caption">Global Settings</h2>

      <div className="form-field">
        <label>Color Primary Background</label>
        <input type="text" value={settings.colorPrimaryBackground} name="colorPrimaryBackground" onChange={onChange} />
      </div>   

      <div className="form-field">
        <label>Color Primary Text</label>
        <input type="text" value={settings.colorPrimaryText} name="colorPrimaryText" onChange={onChange} />
      </div>     

      <button className="form-save-btn" type="button" onClick={() => changeSettings(settings)}>Save</button>

    </div>
  );
}

export default Settings;


