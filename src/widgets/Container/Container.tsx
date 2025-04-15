import { CSSProperties, ReactNode } from 'react';

type TContainer = {
    children: ReactNode;
    styles?: CSSProperties;
};

const stylesINITIAL: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};
export const Container = ({ children, styles = stylesINITIAL }: TContainer) => {
    return <div style={styles}>{children}</div>;
};
