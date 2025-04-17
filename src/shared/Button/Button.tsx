import cls from './Button.module.scss';
type TButton = {
    label: string;
    handleClick: () => void;
    clazz?: string;
};
export const Button = ({ label, handleClick, clazz }: TButton) => {
    return (
        <div className={clazz ? clazz : cls.btnWrap}>
            <button onClick={handleClick}>{label}</button>
        </div>
    );
};
