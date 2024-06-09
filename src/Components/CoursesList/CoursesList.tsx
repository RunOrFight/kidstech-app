import {ICourse} from "../../Api/Models/ICourse.ts";
import {CSSProperties, FC, memo} from "react";
import classes from "./CoursesList.module.css"
import {ProgressiveImage} from "../ProgressiveImage/ProgressiveImage.tsx";
import {SkeletonLine} from "../SkeletonLine/SkeletonLine.tsx";
import {range} from "../../Utils/Range.ts";

const Course = memo<ICourse>(({bgColor, image, name}) => {
    const style: CSSProperties = {backgroundColor: bgColor}

    return <div className={classes.course}>
        <div className={classes.courseImgContainer} style={style}>
            <ProgressiveImage alt={"courseImage"} src={image} className={classes.courseImg} height={288} width={288}/>
        </div>
        <div className={classes.courseBottom}>{name}</div>
    </div>
})
Course.displayName = "Course"

const SkeletonCourse = () => {
    return <div className={classes.course}>
        <div className={classes.courseImgContainer}>
            <SkeletonLine/>
        </div>
        <div className={classes.courseBottom}>
            <SkeletonLine height={"18px"}/>
        </div>
    </div>
}

type TCoursesListProps =
    {
        skeleton?: false
        courses: ICourse[]
    } |
    {
        skeleton: true
        courses?: never
    }

const CoursesList: FC<TCoursesListProps> = (props) => {

    if (props.skeleton) {
        return <div className={classes.coursesList}>
            {range(7).map((_, i) => <SkeletonCourse key={i}/>)}
        </div>
    }

    return <div className={classes.coursesList}>
        {props.courses.map((course) => <Course {...course} key={course.id}/>)}
    </div>
}

export {CoursesList}
