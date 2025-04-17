import { useEffect } from 'react';
import { THEME, useTheme } from '../../app/providers/contexts/ThemeContext';
import { Button, LinkHref } from '../../shared';
import cls from './Header.module.scss';

export const Header = () => {
    const { changeTheme, theme } = useTheme();
    const isLight = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    useEffect(() => {
        document.body.setAttribute('data-theme', isLight);
    }, [theme]);

    return (
        <div className={cls.header}>
            <LinkHref label="Главная" />
            <LinkHref label="Связь" />
            <LinkHref label="Что-то" />
            <LinkHref label="Еще что-то" />
            <Button label="Theme" handleClick={changeTheme} />
        </div>
    );
};
