import { CSSProperties } from 'react';

type TLinkItem = {
    label: string;
    href?: string;
    sizeStyle?: CSSProperties;
};

export const LinkHref = ({
    label,
    sizeStyle = { height: 50, width: 100 },
    href = '/',
}: TLinkItem) => {
    return (
        <a href={href} style={sizeStyle}>
            {label}
        </a>
    );
};
