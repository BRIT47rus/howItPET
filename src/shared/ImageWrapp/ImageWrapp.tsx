type ImageWrapp = {
    src: string;
    alt: string;
};

export const ImageWrapp = ({ src, alt }: ImageWrapp) => {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    );
};
