import { useEffect, useState } from 'react';
import { InfoArticleType } from '../../app/db/howDates/types';
import cls from './Article.module.scss';

interface ArticleProps {
    label: string;
    item: InfoArticleType;
}
export const Article = ({ item, label }: ArticleProps) => {
    const [openArticle, setOpenArticle] = useState(false);
    const handleClick = () => {
        setOpenArticle((prev) => !prev);
    };
    useEffect(() => {
        setOpenArticle(false); // Сбрасываем состояние при каждом изменении articleState
    }, [item]); // Зависимость от articleState

    return (
        <div className={cls.article}>
            {openArticle ? (
                <div>
                    {item.text.map((text, id) => (
                        <div key={id}>
                            <h2>{text.title}</h2>

                            <div
                                className={cls.text}
                                dangerouslySetInnerHTML={{ __html: text.text }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <span onClick={handleClick}>{label}</span>
            )}
        </div>
    );
};
