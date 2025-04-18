import { LinkHref } from '../../shared';
import cls from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={cls.footer}>
            <LinkHref label="Главная" />
            <LinkHref label="О нас" />
        </div>
    );
};
