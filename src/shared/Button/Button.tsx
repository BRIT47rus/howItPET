import { JSX } from 'react';
import cls from './Button.module.scss';
type TButton = {
    label?: string;
    handleClick: () => void;
    clazz?: string;
    children?: JSX.Element;
};
export const Button = ({ label, handleClick, clazz, children }: TButton) => {
    return (
        <div className={clazz ? clazz : cls.btnWrap}>
            {children ? children : ''}
            <button onClick={handleClick}>{label}</button>
        </div>
    );
};
