import {CSSProperties, FC} from "react";
import classes from "./SkeletonLine.module.css";

const SkeletonLine: FC<Pick<CSSProperties, "width" | "height">> = ({width, height}) => {
    const style: CSSProperties = {width, height}

    return <div className={classes.skeletonLine} style={style}/>;
};
SkeletonLine.displayName = "SkeletonLine";

export {SkeletonLine};
