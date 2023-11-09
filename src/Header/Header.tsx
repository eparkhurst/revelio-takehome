import { useNavigate } from 'react-router-dom';
import './Header.css';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

const Header = ({}) => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    console.log(path === '/latest');
    console.log(path);
    return (
        <div className="header">
            <span className="left-header">
                <span className="logo">Y</span>
                <h1 className="title">Hacker News</h1>
                <span
                    className={path === '/latest' ? 'header-nav active' : 'header-nav'}
                    onClick={() => navigate('/latest')}
                >
                    latest
                </span>
                |
                <span
                    className={path === '/starred' ? 'header-nav active' : 'header-nav'}
                    onClick={() => navigate('/starred')}
                >
                    starred
                </span>
            </span>
            <span className="right-header">
                <DarkModeToggle />
            </span>
        </div>
    );
};
export default Header;
