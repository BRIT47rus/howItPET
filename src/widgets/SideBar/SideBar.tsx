import { useState } from 'react';
import { LinkUL } from '../../shared';
import cls from './SideBar.module.scss';
const arrayLinks = [1, 2, 3, 5, 6];
export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={cls.sideBar}>
            <div onClick={handleOpen}>x</div>

            <ul
                className={cls.ulList}
                style={{
                    width: isOpen ? '100%' : 0,
                    padding: isOpen ? '12px 20px' : '12px 1px',
                }}
            >
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
                <LinkUL label={isOpen ? 'Финансы' : ''} />
            </ul>
        </div>
    );
};
