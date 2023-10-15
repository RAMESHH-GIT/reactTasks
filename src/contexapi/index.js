//the context api allows you create central data store that can be access by any component
//in the application eleimninate the need of propdrilling and simplify the state management for shre data
//it enables the component consumes to the share data without having passing to props

import { createContext } from "react";
import parent from "./parent"

//example data:"ra"
//parentchild
//garndchild
//data:"ra"

// create,provide,consume
//provider create context and hold the state that you want to share with other compeonts
//conume:this comp consumes the data stored in the context and allows component to access and use that data
//1. create contexApi
const myContext = createContext();

function App(){
    //data
    let name = "ramesh";
    return(
        <div>
            <h1>appc | contextApi</h1>
            <p>Data:<span>{name}</span></p>


            {/* //2.context provider// */}
            <myContext.Provider value ={name}>
                <parent/>
            </myContext.Provider>


        </div>
    )
}
//export default App;
export {myContext}

//consume
import React from './react';
import {myContext} from "./App"
export default function garndchild(){
    return(
        <div>
{/* consume context */}
<myContext.Consumer>
    {(name)=>{
        return (
            <p>
                Data:<span>{name}</span>
            </p>
        )
    }}
</myContext.Consumer>
        </div>
    )
}