import cls from './LinkUL.module.scss';

type TLinkUL = {
    label: string;
};

export const LinkUL = ({ label }: TLinkUL) => {
    return <li className={cls.link}>{label}</li>;
};
