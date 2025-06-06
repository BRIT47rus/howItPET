import { LinkUL } from '../../shared';
import cls from './SideBar.module.scss';
import { data as importedData } from '../../app/db/data';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/providers/store/store';
import { getArticleTitle } from '../../app/providers/slices/articleSlice';
import { useState } from 'react';

interface DataItem {
    titleData: string;
}
interface Data {
    [key: string]: DataItem;
}
// Переопределите тип 'data' с использованием нашего интерфейса

export const SideBar: React.FC = () => {
    const data: Data = importedData;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClick = (title: string) => {
        setIsOpen((prev) => !prev);
        dispatch(getArticleTitle(title));
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
                        onClick={() => handleClick(title)}
                    />
                ))}
            </ul>
        </div>
    );
};
