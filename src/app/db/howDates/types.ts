export interface ArticleT {
    titleData: string;
    bgImage: string;
    text: {
        title: string;
        text:
            | {
                  title: string;
                  text: string;
              }[]
            | string;
    };
}
