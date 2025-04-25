import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/store';
import { Container } from '../../widgets';
import { useState, useEffect } from 'react'; // Импортируйте ArticleT
import { ArticleT } from '../../app/db/howDates/types';
import cls from './MainPage.module.scss';
import { Article } from '../../widgets/Article/Article';

export const MainPage = () => {
    // Получаем состояние 'article' из Redux с помощью useSelector
    const articleState: ArticleT = useSelector(
        (state: RootState) => state.article
    );
    const [dataStore, setDataStore] = useState<ArticleT | null>(articleState);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    // Эффект, который следит за изменениями в articleState и обновляет локальное состояние
    useEffect(() => {
        setDataStore(null);
        setDataStore(articleState);
    }, [articleState]); // Зависимость - значение, полученное из useSelector

    return (
        <Container classess={cls.content}>
            <h1>{dataStore?.titleData || 'Нет данных'}</h1>
            {dataStore &&
                dataStore.info.map((item) => (
                    <Article
                        key={item.id}
                        item={item}
                        label={item.title}
                        open={open}
                        handleClick={handleClick}
                    />
                ))}
        </Container>
    );
};
