import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/store';
import { Container } from '../../widgets';
import { useState, useEffect } from 'react'; // Импортируйте ArticleT
import { ArticleT } from '../../app/db/howDates/types';
export const MainPage = () => {
    // Получаем состояние 'article' из Redux с помощью useSelector
    const articleState: ArticleT | undefined = useSelector(
        (state: RootState) => state.article
    );
    const [dataStore, setDataStore] = useState<ArticleT | undefined>(
        articleState
    );

    // Эффект, который следит за изменениями в articleState и обновляет локальное состояние
    useEffect(() => {
        setDataStore(articleState);
    }, [articleState]); // Зависимость - значение, полученное из useSelector

    return <Container>{dataStore?.titleData || 'Нет данных'}</Container>;
};
