import { financeData, testData } from './howDates/finance';
import { ArticleT } from './howDates/types';
const intialState: ArticleT = {
    titleData: 'начальный экран',
    bgImage: '',
    text: {
        title: 'Заголовок',
        text: 'Тестовая',
    },
};
export const data = {
    intialState,
    financeData,
    testData,
};
