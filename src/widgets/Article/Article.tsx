import { useEffect, useState } from 'react';
import { InfoArticleType } from '../../app/db/howDates/types';
import cls from './Article.module.scss';

interface ArticleProps {
    label: string;
    item: InfoArticleType;
}
export const Article = ({ item, label }: ArticleProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div>
            {open ? (
                <div>
                    {item.text.map((text, id) => (
                        <div key={id}>
                            <h2>{text.title}</h2>

                            <div>{text.text}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <span onClick={handleClick}>{label}</span>
            )}
        </div>
    );
};
// :
