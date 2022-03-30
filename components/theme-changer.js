import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Own
 */
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const handleInputChange = ($event) => {
        const { value } = $event.target;
        setTheme(value === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted && (
        <div className={styles.themeToggle}>
            Your current theme is: <strong>{theme}</strong>
            <br />
            <label className={`switch ${utilStyles.marginTop5px}`}>
            <input
                type="checkbox"
                value={theme}
                checked={theme === 'dark'}
                onChange={handleInputChange} />
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default ThemeChanger;
