import React, {useState} from "react";
import {reducer} from "redux-form";

type OnOffCLPropsType = {
    // on:boolean
}

export const On_Off_cl:React.FC<OnOffCLPropsType> = (props) => {

    let[on,setOn] = useState<boolean>(false)
console.log(`on : ${on}`)
    const onStyle = {
        width:"50px",
        height:"30px",
        border: "1px solid black",
        display:"inline-block",
        background: on ? "green" : "white",
        padding:"2px"
    }
    const offStyle = {
        width:"50px",
        height:"30px",
        border: "1px solid black",
        display:"inline-block",
        background: on ? "white" : "red",
        marginLeft:"2px",
        padding:"2px"
    }

    const indicatorStyle = {
        width:"10px",
        height:"10px",
        border: "1px solid black",
        display:"inline-block",
        borderRadius:"15px",
        background: on ? "green" : "red",
        marginLeft:"2px",
        alignSelf:"center"
    }

    const root = {
        alignItems:"center"
    }

    return(
        <div style={root}>
            <div onClick={()=>{setOn(true)}} style={onStyle}>On</div>
            <div onClick={()=>{setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

)
}