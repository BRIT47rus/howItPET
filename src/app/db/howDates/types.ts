// type FinanceType = 'ipoteka' | 'test';

export interface InfoArticleType {
    id: string;
    title: string;
    text:
        | {
              title: string;
              text: string;
          }[];
}

export interface ArticleT {
    titleData: string;
    bgImage: string;
    info: InfoArticleType[];
}
