import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    const systemPrefersDark = useMediaQuery(
        {
            query: '(prefers-color-scheme: dark)',
        },
        undefined,
        (isSystemDark: any) => setIsDark(isSystemDark),
    );

    return (
        <button onClick={() => setIsDark(!isDark)} aria-label="Dark mode toggle">
            {isDark ? '🔆' : '🌙'}
        </button>
    );
};
