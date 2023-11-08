import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

const Header = ({}) => {
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(true);

    return (
        <div className="header">
            <span className="left-header">
                <h1>Hacker News</h1>
                <button onClick={() => navigate('/latest')}>latest</button>
                <button onClick={() => navigate('/starred')}>starred</button>
            </span>
            <span className="right-header">
                <DarkModeToggle />
            </span>
        </div>
    );
};
export default Header;
