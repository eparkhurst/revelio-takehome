import Latest from './Latest/Latest';
import Starred from './Starred/Starred';
import ErrorPage from './ErrorPage/ErrorPage';

const routes = [
    {
        path: '/latest',
        element: <Latest />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/starred',
        element: <Starred />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/*',
        element: <Latest />,
        errorElement: <ErrorPage />,
    },
];

export default routes;
