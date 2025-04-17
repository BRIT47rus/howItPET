import cls from './Button.module.scss';
type TButton = {
    label: string;
    handleClick: () => void;
    clazz?: string;
};
export const Button = ({ label, handleClick, clazz }: TButton) => {
    return (
        <div className={cls.btnWrapper}>
            <button className={clazz} onClick={handleClick}>
                {label}
            </button>
        </div>
    );
};
