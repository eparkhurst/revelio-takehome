import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => (
    <>
        <div className="main-section">
            <Header />
            <Outlet />
        </div>
        <Footer />
    </>
);

export default Layout;
