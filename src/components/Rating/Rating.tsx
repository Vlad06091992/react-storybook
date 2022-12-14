import React, {useState} from "react";

type Value = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: Value
    onClick: (n: Value) => void
}
type StarPropsType = {
    selected: boolean
    onClick: (n: Value) => void
    value: Value
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star onClick={props.onClick} selected={props.value > 0} value={1}/>
            <Star onClick={props.onClick} selected={props.value > 1} value={2}/>
            <Star onClick={props.onClick} selected={props.value > 2} value={3}/>
            <Star onClick={props.onClick} selected={props.value > 3} value={4}/>
            <Star onClick={props.onClick} selected={props.value > 4} value={5}/>


        </div>
    )
}


function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.onClick(props.value)
    }}
    >{props.selected ? <b> Star</b> : " Star"}</span>
}

