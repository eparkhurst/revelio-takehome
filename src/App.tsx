import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
    const router = createBrowserRouter(routes);
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
