import React, {useState} from "react";
import {reducer} from "redux-form";

export interface OnOffCLPropsType {
    /**
     * * If on - onOff is On, else - No on ))
     */
    on: boolean
    /**
     * the function that change status ))
     */
    setOn: (arg: boolean) => void,



}

export const ControlledOnOff: React.FC<OnOffCLPropsType> = (props) => {
    const defaultStyleButtons = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"

    }

    const onStyle = {
        background: props.on ? "green" : "white",
    }
    const offStyle = {
        background: props.on ? "white" : "red",
        marginLeft: "2px",
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        display: "inline-block",
        borderRadius: "15px",
        background: props.on ? "green" : "red",
        marginLeft: "2px",
        alignSelf: "center"
    }

    const root = {
        alignItems: "center"
    }

    return (
        <div style={root}>
            <div onClick={() => {
                props.setOn(true)
            }} style={Object.assign({}, defaultStyleButtons, onStyle)}>On
            </div>
            <div onClick={() => {

                props.setOn(false)
            }} style={Object.assign({}, defaultStyleButtons, offStyle)}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>

    )
}