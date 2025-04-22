import cls from './LinkUL.module.scss';

type TLinkUL = {
    label: string;
    onClick?: () => void;
};

export const LinkUL = ({ label, onClick }: TLinkUL) => {
    return (
        <li onClick={onClick} className={cls.link}>
            {label}
        </li>
    );
};
