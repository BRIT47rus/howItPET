type FinanceType = 'ipoteka' | 'test';

export interface ArticleT {
    titleData: string;
    bgImage: string;
    info: {
        [key: string]: {
            title: string;
            text:
                | {
                      title: string;
                      text: string;
                  }[]
                | string;
        };
    };
}
