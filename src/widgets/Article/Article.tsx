// import { useEffect, useState } from 'react';
import { InfoArticleType } from '../../app/db/howDates/types';
import cls from './Article.module.scss';

interface ArticleProps {
    label: string;
    item: InfoArticleType;
    open: boolean;
    handleClick?: () => void;
}
export const Article = ({ item, label, open, handleClick }: ArticleProps) => {
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
