import React, { useReducer, useEffect } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
  SETTINGS_CHANGE,
} from "../app/Types";

const AppState = (props: any) => {

  const initialState = {
    package: null,
    params: {
      colorPrimaryBackground: '#000',
      colorPrimaryText: '#fff',
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {

    // eslint-disable-next-line
  }, []);

  const changeSettings = (newSettings: any) => {
    dispatch({ type: SETTINGS_CHANGE, payload: newSettings });
  }

  return (
    <AppContext.Provider
      value={{
        package: state.package,
        params: state.params,
        changeSettings
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
