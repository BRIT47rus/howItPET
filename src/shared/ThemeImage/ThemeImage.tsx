import { CSSProperties } from 'react';
import dayIconPNG from '../../app/assets/theme/day.png';
import nigthIconPNG from '../../app/assets/theme/night.png';
import { THEME, useTheme } from '../../app/providers/contexts/ThemeContext';
import cls from './IconTheme.module.scss';

export const DayIcon = ({ styleIcon }: { styleIcon: CSSProperties }) => {
    const { theme } = useTheme();
    return (
        <>
            {theme === THEME.DARK ? (
                <img
                    src={dayIconPNG}
                    alt="Иконка дня"
                    className={cls.icon}
                    style={styleIcon}
                />
            ) : (
                <img
                    src={nigthIconPNG}
                    alt="Иконка дня"
                    className={cls.icon}
                    style={styleIcon}
                />
            )}
        </>
    );
};
