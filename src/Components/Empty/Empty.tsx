import classes from "./Empty.module.css";
import {ERROR_MESSAGES} from "../../Constants/ErrorMessages.ts";

const Empty = () => <div className={classes.empty}>{ERROR_MESSAGES.noData}</div>
Empty.displayName = "Empty";

export {Empty};
