import React from "react";

type PageTitlePropsType = {
    title:string
}

export default function PageTitle(props:PageTitlePropsType){
    console.log("Start title")

    return <h1>{props.title}</h1>
}