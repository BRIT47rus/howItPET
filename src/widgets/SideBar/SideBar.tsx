import { useState } from 'react';
import { LinkUL } from '../../shared';
import cls from './SideBar.module.scss';
import { data } from '../../app/db/data';

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
                {Object.keys(data).map((title, idx) => (
                    <LinkUL
                        label={isOpen ? data[title].titleData : ''}
                        key={idx}
                    />
                ))}
            </ul>
        </div>
    );
};
