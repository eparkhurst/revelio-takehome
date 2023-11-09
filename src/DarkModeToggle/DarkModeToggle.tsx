import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectDarkMode, upadateDarkMode } from '../redux/userSlice';

export const DarkModeToggle = () => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(selectDarkMode);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button onClick={() => dispatch(upadateDarkMode(!isDark))} aria-label="Dark mode toggle">
            {isDark ? '🔆' : '🌙'}
        </button>
    );
};
