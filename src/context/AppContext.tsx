import { createContext } from 'react';
import { IApp } from '../app/Types';

const AppContext = createContext<IApp>({} as IApp);

export default AppContext;