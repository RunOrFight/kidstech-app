import {FC, useState} from "react";
import classes from "./TagsList.module.css"

interface ITagsListProps {
    tags: string[]
}

const TagsList: FC<ITagsListProps> = ({tags}) => {
    const [activeTag, setActiveTag] = useState(tags[0])

    return <ul className={classes.tagsList}>
        {tags.map((tag, i) => {
            const className = classes.tag + (activeTag === tag ? ` ${classes.active}` : "")

            const onClick = () => {
                setActiveTag(tag)
            }

            const tabIndex = i + 1

            return <li tabIndex={tabIndex} key={tag} className={className} onClick={onClick}>{tag}</li>
        })}
    </ul>
}
TagsList.displayName = "TagsList"

export {TagsList}
