import {useEffect, useState} from "react";
import {httpApi} from "../Api/HttpApi.ts";
import {TagsList} from "../Components/TagsList/TagsList.tsx";
import {getAllPossibleTagsFromCourses} from "../Utils/GetAllPossibleTagsFromCourses.ts";
import classes from "./App.module.css"
import {CoursesList} from "../Components/CoursesList/CoursesList.tsx";
import {Error} from "../Components/Error/Error.tsx";
import {Empty} from "../Components/Empty/Empty.tsx";
import {ICourse} from "../Api/Models/ICourse.ts";
import {ALL_TAG} from "../Constants/AllTag.ts";
import {ERROR_MESSAGES} from "../Constants/ErrorMessages.ts";

const App = () => {
    const [tags, setTags] = useState<string[]>([])
    const [courses, setCourses] = useState<ICourse[]>([])
    const [activeTag, setActiveTag] = useState<string>(ALL_TAG)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)

        httpApi.getAllCourses().then((allCourses) => {
            const allPossibleTags = getAllPossibleTagsFromCourses(allCourses)

            setTags(allPossibleTags)
            setCourses(allCourses)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
            setError(ERROR_MESSAGES.failedToFetch)
        })
    }, []);


    if (loading) {
        return <div className={classes.app}>
            <TagsList skeleton/>
            <CoursesList skeleton/>
        </div>
    }

    if (error) {
        return <Error error={error}/>
    }

    if (courses.length === 0) {
        return <Empty/>
    }

    const renderCourses = activeTag === ALL_TAG ? courses : courses.filter((it) => it.tags.includes(activeTag))

    return <div className={classes.app}>
        <TagsList tags={tags} activeTag={activeTag} setActiveTag={setActiveTag}/>
        <CoursesList courses={renderCourses}/>
    </div>
}

export {App}
