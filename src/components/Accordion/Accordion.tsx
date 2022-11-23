import React, {useState} from "react";

type Itemtype = {
    title:string
    value:number
}

type AccordionBodyItemsType = {
    items:Itemtype[]
}

export interface AccordionPropsType  {
    /**
     * This is name of title
     */
    title:string
    /**
     * This is background color  of title
     */
    titleBackground?:string
    /**
     * this is collapsed mode(for useState)
     */
    collapsed:boolean
    /**
     * this is collapsed mode(for useState)
     */
    onChange:()=>void
    /**
     * the array for the list
     */
    items : Itemtype[]
    /**
     * а тут что-то на русском
     * @param value is value clicked item
     */
    onClick : (value:any)=>void

}

type AccordionTitleType = {
    onChange:()=>void
    title:string
    collapsed:boolean
    titleBackground?:string
}


export function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle titleBackground={props.titleBackground} collapsed={props.collapsed} onChange={props.onChange} title={props.title}/>
                {!props.collapsed && <AccordionBody items={props.items}/>}
            </div>
        )

}

function AccordionTitle(props: AccordionTitleType) {

    console.log('Rendering AccordionTitle')
    return (
        <h3 style={{background:props.titleBackground? props.titleBackground : ""}} onClick={props.onChange}>
            ---{props.title}---
        </h3>
    )
}

function AccordionBody(props:AccordionBodyItemsType) {
    console.log('Rendering AccordionBody')
    return (
        <div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>

    )
}