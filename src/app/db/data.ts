import { financeData, testData } from './howDates/finance';
import { ArticleT } from './howDates/types';
const intialState: ArticleT = {
    titleData: 'начальный База',
    bgImage: '',
    info: {
        test: {
            title: 'Заголовок',
            text: [
                {
                    title: 'Тестовый заголовок',
                    text: 'Тестовая информация',
                },
            ],
        },
    },
};
export const data = {
    intialState,
    financeData,
    testData,
};
