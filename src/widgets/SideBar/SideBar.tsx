import { LinkUL } from '../../shared';
import cls from './SideBar.module.scss';
export const SideBar = () => {
    return (
        <div className={cls.sideBar}>
            <ul>
                <LinkUL label="Финансы" />
            </ul>
        </div>
    );
};
