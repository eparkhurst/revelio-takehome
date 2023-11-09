import Latest from './Latest/Latest';
import Starred from './Starred/Starred';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './Layout/Layout';

const routes = [
    {
        element: <Layout />,
        children: [
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
        ],
    },
];

export default routes;
