import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/store';
import { Container } from '../../widgets';
import { useState, useEffect } from 'react';
import { ArticleT } from '../../app/db/howDates/types';
import cls from './MainPage.module.scss';
import { Article } from '../../widgets/Article/Article';

export const MainPage = () => {
    const articleState: ArticleT = useSelector(
        (state: RootState) => state.article
    );
    const [openArticle, setOpenArticle] = useState(false);

    const handleClick = () => {
        setOpenArticle((prev) => !prev);
    };

    // Эффект для сброса openArticle при изменении articleState (выборе новой категории)
    useEffect(() => {
        setOpenArticle(false); // Сбрасываем состояние при каждом изменении articleState
    }, [articleState]); // Зависимость от articleState

    return (
        <Container classess={cls.content}>
            <h1>{articleState?.titleData || 'Нет данных'}</h1>
            {articleState?.info?.map((item) => (
                <Article
                    key={item.id}
                    item={item}
                    label={item.title}
                    open={openArticle}
                    handleClick={handleClick}
                />
            ))}
        </Container>
    );
};
