import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/store';
import { Container } from '../../widgets';
import { ArticleT } from '../../app/db/howDates/types';
import cls from './MainPage.module.scss';
import { Article } from '../../widgets/Article/Article';

export const MainPage = () => {
    const articleState: ArticleT = useSelector(
        (state: RootState) => state.article
    );

    return (
        <Container classess={cls.content}>
            <h1>{articleState?.titleData || 'Нет данных'}</h1>
            {articleState?.info?.map((item) => (
                <Article key={item.id} item={item} label={item.title} />
            ))}
        </Container>
    );
};
