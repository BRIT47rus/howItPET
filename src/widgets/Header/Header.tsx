import { LinkHref } from '../../shared';
import cls from './Header.module.scss';

export const Header = () => {
    return (
        <div className={cls.header}>
            <LinkHref label="Главная" />
            <LinkHref label="Связь" />
            <LinkHref label="Что-то" />
            <LinkHref label="Еще что-то" />
        </div>
    );
};
