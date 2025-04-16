import cls from './Button.module.scss';
type TButton = {
    label: string;
    handleClick: () => void;
};
export const Button = ({ label, handleClick }: TButton) => {
    return (
        <div className={cls.btnWrapper}>
            <button className={cls.blt} onClick={handleClick}>
                {label}
            </button>
        </div>
    );
};
