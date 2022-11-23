import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {AccordionPropsType} from "./Accordion";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import exp from "constants";
import {action} from "@storybook/addon-actions";
import {inspect} from "util";
import {colors} from "@storybook/node-logger";


 const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => {
    return (
        <Accordion {...args}/>
    )
}

export default {
    title: "MyComponents/ACCORDION",
    component: Accordion,

} as ComponentMeta<typeof Accordion>

const callback = action("Accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const callBackProps = {
     onChange : callback,
    onClick:onClickCallback
}

export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    ...callBackProps,
    title: "test",
    collapsed: true,
    titleBackground:"#963838",
    items: [{title: "Igorek", value: 1}, {title: "Valerka", value: 2}],
}

export const MenuCollapsed = () => {
    return (
        <Accordion title={"User"}
                   titleBackground={"#963838"}
                   collapsed={true}
                   onChange={callback}
                   items={[]}
                   onClick={onClickCallback}/>
    )
}

export const UncollapsedMenu = () => {
    return (
        <Accordion title={"Menu"}
                   titleBackground={"#963838"}
                   collapsed={false}
                   onChange={callback}
                   items={[{title: "Ivan", value: 1}, {title: "Igor", value: 2}]}
                   onClick={onClickCallback}/>
    )
}




export const UnCollapsedMenuMode2 = Template.bind({})

UnCollapsedMenuMode2.args = {
    ...callBackProps,
    title: "test",
    collapsed: false,
    titleBackground:"#963838",

    items: [{title: "Igorek", value: 1}, {title: "Valerka", value: 2}],
}




