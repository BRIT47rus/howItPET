import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/store';
import { Container } from '../../widgets';
import { useState, useEffect } from 'react'; // Импортируйте ArticleT
import { ArticleT } from '../../app/db/howDates/types';

// type DataStroreInfoType = ArticleT['info']];

export const MainPage = () => {
    // Получаем состояние 'article' из Redux с помощью useSelector
    const articleState: ArticleT = useSelector(
        (state: RootState) => state.article
    );
    const [dataStore, setDataStore] = useState<ArticleT>(articleState);
    const category = dataStore.info;
    console.log(category);

    // Эффект, который следит за изменениями в articleState и обновляет локальное состояние
    useEffect(() => {
        setDataStore(articleState);
    }, [articleState]); // Зависимость - значение, полученное из useSelector

    return (
        <Container>
            {dataStore?.titleData || 'Нет данных'}
            {dataStore?.info..text.map((step, index) => (
                <div key={index}>
                    <h3>{step.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: step.text }} />
                </div>
            ))}
        </Container>
    );
};
