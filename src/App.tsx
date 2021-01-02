import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IRoute, routes } from './app/Routes';
import { Layout } from './app/Types';
import Navbar from './components/Layout/Navbar';
import AppState from './context/AppState';
import Config from './components/Layout/Config';

function App() {

  const layoutType = (route: IRoute) => {
    let layout;
    switch (route.layout) {
      case Layout.Default:
        layout = (
          <div className="page">
            <Config />
            <Navbar />
            <route.component />
          </div>
        )
        break;

      default:
        layout = (
          <>
            <Navbar />
            <route.component />
          </>
        )
        break;
    }
    return layout;
  }

  return (
    <AppState>        
        <BrowserRouter>      
          <Switch>            
            {routes.map((route: IRoute) => {   
              return <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
              >
                {layoutType(route)}
              </Route>
            })}
          </Switch>      
        </BrowserRouter>
      </AppState>
  );
}

export default App;
