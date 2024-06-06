import {expect, test} from "vitest";
import {getAllPossibleTagsFromCourses} from "../GetAllPossibleTagsFromCourses.ts";

const BASE_CASE = {
    input: [
        {
            "name": "Шахматы",
            "id": "course:1",
            "image": "",
            "bgColor": "#FF9966",
            "tags": ["Головоломки", "Шахматы", "Логика и мышление"]
        },
        {
            "name": "Италия",
            "id": "course:17",
            "image": "",
            "bgColor": "#FFCC74",
            "tags": ["Страны и столицы"]
        },
    ],
    output: ["Головоломки", "Шахматы", "Логика и мышление", "Страны и столицы"]
}

test("base case", () => {
    expect(getAllPossibleTagsFromCourses(BASE_CASE.input)).toStrictEqual(BASE_CASE.output)
})

const COURSES_WITH_DUPLICATE_TAGS = {
    input: [
        {
            "name": "Шахматы",
            "id": "course:1",
            "image": "",
            "bgColor": "#FF9966",
            "tags": ["Головоломки", "Шахматы", "Логика и мышление"]
        },
        {
            "name": "Италия",
            "id": "course:17",
            "image": "",
            "bgColor": "#FFCC74",
            "tags": ["Головоломки", "Шахматы", "Логика и мышление", "Страны и столицы"]
        },
    ],
    output: ["Головоломки", "Шахматы", "Логика и мышление", "Страны и столицы"]
}

test("courses with duplicate tags ", () => {
    expect(getAllPossibleTagsFromCourses(COURSES_WITH_DUPLICATE_TAGS.input)).toStrictEqual(COURSES_WITH_DUPLICATE_TAGS.output)
})
