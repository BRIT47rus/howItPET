import { useTheme } from '../../app/providers/contexts/ThemeContext';
import { Button, LinkHref } from '../../shared';
import cls from './Header.module.scss';

export const Header = () => {
    const { changeTheme } = useTheme();
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
