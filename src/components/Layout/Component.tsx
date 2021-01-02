import React from 'react';

const Component = (props: any) => {  
  return (
    <div className="component-card">
      {props.globalStyles}         
      <h2 className="component-card__name">{props.name}</h2>
      <div className="component-card__view">
        <div dangerouslySetInnerHTML={props.component}/> 
      </div>
      <div className="component-card__source">
        <div className="component-card__source-part">
          <textarea value={props.cssSource}></textarea>
        </div>
        <div className="component-card__source-part">
          <textarea value={props.htmlSource}></textarea>
        </div>
      </div>
    </div>    
  );
}

export default Component;
