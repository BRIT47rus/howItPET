import { financeData, testData } from './howDates/finance';
import { ArticleT } from './howDates/types';
const intialState: ArticleT = {
    titleData: 'начальный экран',
    bgImage: '',
    info: {
        test: {
            title: 'Заголовок',
            text: [
                {
                    title: 'Тестовый заголовок',
                    text: 'Тестовая',
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
