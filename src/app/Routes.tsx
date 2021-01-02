import { Layout } from './Types';
import Headers from '../components/Pages/Headers';
import Footers from '../components/Pages/Footers';
import Products from '../components/Pages/Products';
 
export interface IRoute {
    path: string;
    exact?: boolean;
    component?: any;
    layout?: Layout;
}

export const routesUrl = {
    Homepage: '/',
    Headers: '/headers',
    Products: '/products',
    Footers: '/footers',
}

export const routes: IRoute[] = [
    {
        path: routesUrl.Homepage,
        exact: true,
        component: Headers,
        layout: Layout.Default,
    },
    {
        path: routesUrl.Headers,
        exact: true,
        component: Headers,
        layout: Layout.Default,
    },
    {
        path: routesUrl.Footers,
        exact: true,
        component: Footers,
        layout: Layout.Default,
    },
    {
        path: routesUrl.Products,
        exact: true,
        component: Products,
        layout: Layout.Default,
    },
];
