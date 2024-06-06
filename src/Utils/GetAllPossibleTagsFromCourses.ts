import {ICourse} from "../Api/Models/ICourse.ts";

const getAllPossibleTagsFromCourses = (courses: ICourse[]): string[] => courses.reduce((acc, it) => {
    it.tags.forEach((tag) => {
        if (acc.includes(tag)) {
            return
        }
        acc.push(tag)
    })

    return acc
}, [])

export {getAllPossibleTagsFromCourses}
