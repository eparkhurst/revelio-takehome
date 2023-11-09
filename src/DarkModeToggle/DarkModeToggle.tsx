import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectDarkMode, upadateDarkMode } from '../redux/userSlice';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness5Icon from '@mui/icons-material/Brightness5';

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
        <div onClick={() => dispatch(upadateDarkMode(!isDark))} aria-label="Dark mode toggle">
            {isDark ? <Brightness5Icon /> : <NightlightRoundIcon />}
        </div>
    );
};
