import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {On_Off_cl} from "./components/OnOff_classMade/OnOff_cl";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";



function App() {
    let [ratingValue, setRatingValue] = useState<0|1|2|3|4|5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let[on,setOn] = useState<boolean>(false)

    let items = [{title:"Ivan",value:1},{title:"Igor",value:2}]

    console.log("Start App")
    return (
        <div className="App">
            <ControlledOnOff on={on} setOn={setOn}/> {on.toString()}
            <Accordion
                items={items}
                titleBackground={"#583322"}
                title={"Menu"}
                collapsed={accordionCollapsed}
                onClick={x=>x}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>


            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}


export default App;









