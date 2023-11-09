import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = ({}) => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <h1 className="footer-title">Hacker News</h1>
            <div className="nav-buttons">
                <span className={'footer-nav'} onClick={() => navigate('/latest')}>
                    latest
                </span>
                |
                <span className={'footer-nav'} onClick={() => navigate('/starred')}>
                    starred
                </span>
            </div>
        </div>
    );
};
export default Footer;
