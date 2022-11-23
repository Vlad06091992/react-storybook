import {ControlledOnOff} from "./ControlledOnOff";
import React, {useState} from "react";
import {OnOffCLPropsType} from "./ControlledOnOff";
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: "MyComponents/ControlledOnOff",
    component: ControlledOnOff,

} as ComponentMeta<typeof ControlledOnOff>

const Template: ComponentStory<typeof ControlledOnOff> = (args: OnOffCLPropsType) => {

    let [on, setOn] = useState(true)

    return (
        <ControlledOnOff on={on} setOn={setOn}/>
    )
}

export const OnButton: ComponentStory<typeof ControlledOnOff> = (args: OnOffCLPropsType) => {
    return (
        <ControlledOnOff {...args}   />
    )
}

export const OffButton: ComponentStory<typeof ControlledOnOff> = (args: OnOffCLPropsType) => {
    return (
        <ControlledOnOff {...args}   />
    )
}


OnButton.args = {
    on: true,
    setOn() {

    }
}


OffButton.args = {
    on: false,
    setOn() {
        console.log(this)

    }

}

