import { CSSProperties, ReactNode } from 'react';

type TContainer = {
    children: ReactNode;
    styles?: CSSProperties;
    classess?: string;
};

const stylesINITIAL: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};
export const Container = ({
    children,
    styles = stylesINITIAL,
    classess,
}: TContainer) => {
    return (
        <div className={classess} style={styles}>
            {children}
        </div>
    );
};
