import Latest from './Latest/Latest';
import Starred from './Starred/Starred';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './Layout/Layout';
import { redirect } from 'react-router-dom';

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
        ],
    },
    {
        path: '/*',
        element: <></>,
        loader: async () => {
            return redirect('/latest');
        },
        errorElement: <ErrorPage />,
    },
];

export default routes;
