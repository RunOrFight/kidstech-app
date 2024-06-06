import {useEffect, useState} from "react";
import {httpApi} from "../Api/HttpApi.ts";
import {TagsList} from "../Components/TagsList/TagsList.tsx";
import {getAllPossibleTagsFromCourses} from "../Utils/GetAllPossibleTagsFromCourses.ts";
import classes from "./App.module.css"
import {CoursesList} from "../Components/CoursesList/CoursesList.tsx";

const App = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        httpApi.getAllCourses().then((data) => {
            setCourses(data)
        })
    }, []);


    return <div className={classes.app}>
        <TagsList tags={getAllPossibleTagsFromCourses(courses)}/>
        <CoursesList courses={courses}/>
    </div>
}

export {App}
