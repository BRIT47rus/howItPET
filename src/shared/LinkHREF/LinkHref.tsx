type TSizeLinkItem = {
    width: number;
    height: number;
};
type TLinkItem = {
    label: string;
    href?: string;
    sizeStyle?: TSizeLinkItem;
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
