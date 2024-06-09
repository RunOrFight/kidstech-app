import {ImgHTMLAttributes, memo, useState} from "react";
import classes from "./ProgressiveImage.module.css"

type TProgressiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad">

const ProgressiveImage = memo<TProgressiveImageProps>(({className, alt, ...rest}) => {
    const [loading, setLoading] = useState(true);

    const onLoad = () => {
        setLoading(false)
    }

    return <img
        onLoad={onLoad}
        className={`${className} ${loading ? classes.loading : classes.loaded}`}
        alt={alt}
        {...rest}
    />
});
ProgressiveImage.displayName = "ProgressiveImage";

export {ProgressiveImage};
