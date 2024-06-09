import {CSSProperties, Dispatch, FC, memo, SetStateAction} from "react";
import classes from "./TagsList.module.css"
import {ALL_TAG} from "../../Constants/AllTag.ts";
import {SkeletonLine} from "../SkeletonLine/SkeletonLine.tsx";
import {range} from "../../Utils/Range.ts";

interface ITagProps {
    tag: string
    isActive: boolean
    setActiveTag: Dispatch<SetStateAction<string>>
}

const Tag = memo<ITagProps>(({tag, isActive, setActiveTag}) => {
    const className = `${classes.tag} ${classes.clickable}` + (isActive ? ` ${classes.active}` : "")

    const onClick = () => {
        setActiveTag(tag)
    }

    return <li className={className} onClick={onClick}>{tag}</li>
})

const SkeletonTag: FC<Pick<CSSProperties, "width">> = ({width}) => {

    return <li className={classes.tag}>
        <SkeletonLine width={width} height={"18px"}/>
    </li>
}

type TTagsListProps =
    {
        tags: string[]
        activeTag: string
        setActiveTag: Dispatch<SetStateAction<string>>
        skeleton?: false
    } |
    {
        tags?: never
        activeTag?: never
        setActiveTag?: never
        skeleton: true
    }

const getRandomWidth = () => Math.max((Math.random() * 100), 50) + "%"

const TagsList: FC<TTagsListProps> = (props) => {
    if (props.skeleton) {
        return <ul className={classes.tagsList}>
            {range(7).map(() => <SkeletonTag width={getRandomWidth()}/>)}
        </ul>
    }

    const {activeTag, tags, setActiveTag} = props

    return <ul className={classes.tagsList}>
        <Tag tag={ALL_TAG} setActiveTag={setActiveTag} isActive={activeTag === ALL_TAG}/>

        {tags.map((tag) => <Tag key={tag} tag={tag} setActiveTag={setActiveTag} isActive={activeTag === tag}/>)}
    </ul>
}
TagsList.displayName = "TagsList"

export {TagsList}
