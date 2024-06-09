import classes from "./Error.module.css";
import {FC} from "react";

interface IErrorProps {
    error: string
}

const Error: FC<IErrorProps> = ({error}) => <div className={classes.error}>{error}</div>
Error.displayName = "Error";

export {Error};
