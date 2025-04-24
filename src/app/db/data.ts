import { financeData, testData } from './howDates/finance';
import { ArticleT } from './howDates/types';
const intialState: ArticleT = {
    titleData: 'начальный База',
    bgImage: '',
    info: [
        {
            id: 'begin',
            title: 'Заголовок begin',
            text: [
                {
                    title: 'Тестовый заголовок begin',
                    text: 'Тестовая информация begin',
                },
            ],
        },
    ],
};
export const data = {
    intialState,
    financeData,
    testData,
};
