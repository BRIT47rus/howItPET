import { useState } from 'react';
import { LinkUL } from '../../shared';
import cls from './SideBar.module.scss';
import { data as importedData } from '../../app/db/data';

// Определите тип для элемента данных
interface DataItem {
    titleData: string;
    // Добавьте другие свойства, которые есть в ваших данных
}

// Определите тип для объекта data
interface Data {
    [key: string]: DataItem;
}

// Переопределите тип 'data' с использованием нашего интерфейса
const data: Data = importedData;

export const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
