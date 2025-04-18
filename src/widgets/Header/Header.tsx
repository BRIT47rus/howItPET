import { CSSProperties, useEffect, useState } from 'react';
import { THEME, useTheme } from '../../app/providers/contexts/ThemeContext';
import { Button, LinkHref } from '../../shared';
import cls from './Header.module.scss';
import { DayIcon } from '../../shared/ThemeImage/ThemeImage';

export const Header = () => {
    const [isDay, setIsDay] = useState(true);
    const { changeTheme, theme } = useTheme();
    const isLight = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    useEffect(() => {
        document.body.setAttribute('data-theme', isLight);
    }, [theme]);

    const styleIcon: CSSProperties = {
        right: isDay ? '' : '1px',
    };

    const handleChangeTheme = () => {
        changeTheme();
        setIsDay((prev) => !prev);
    };

    return (
        <div className={cls.header}>
            <LinkHref label="Главная" />
            <LinkHref label="Связь" />
            <LinkHref label="Что-то" />
            <LinkHref label="Еще что-то" />

            <div className={cls.themeChange}>
                <Button
                    handleClick={handleChangeTheme}
                    clazz={cls.btn}
                    children={<DayIcon styleIcon={styleIcon} />}
                />
            </div>
        </div>
    );
};
