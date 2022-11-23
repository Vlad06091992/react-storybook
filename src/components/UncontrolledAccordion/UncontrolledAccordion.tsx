import React, {useState} from "react";

type AccordionPropsType = {
    title:string
}

type AccordionTitlePropsType = {
    title:string
    setCollapsed:(c:boolean)=>void
    collapsed:boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let[collapsed,setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle collapsed={collapsed} setCollapsed={setCollapsed} title={props.title}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('Rendering AccordionTitle')
    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>
            ---{props.title}---
        </h3>
    )
}

function AccordionBody() {
    console.log('Rendering AccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}