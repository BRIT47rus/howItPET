import { LinkItem } from 'shared';
import cls from './Heade.module.scss';

export const Header = () => {
    return (
        <div className={cls.header}>
            <LinkItem label="Главная" />
            <LinkItem label="Связь" />
            <LinkItem label="Что-то" />
            <LinkItem label="Еще что-то" />
        </div>
    );
};
