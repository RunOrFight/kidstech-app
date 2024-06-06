import {ICourse} from "../../Api/Models/ICourse.ts";
import {CSSProperties, FC} from "react";
import classes from "./CoursesList.module.css"

const Course: FC<ICourse> = ({bgColor, image, name}) => {
    const style: CSSProperties = {backgroundColor: bgColor}
    return <div style={style} className={classes.course}>
        <img alt={"courseImage"} src={image} className={classes.courseImg}/>
        <div className={classes.courseBottom}>{name}</div>
    </div>
}


interface ICoursesListProps {
    courses: ICourse[]
}

const CoursesList: FC<ICoursesListProps> = ({courses}) => {
    return <div className={classes.coursesList}>
        {courses.map((course) => <Course  {...course}/>)}
    </div>
}

export {CoursesList}
