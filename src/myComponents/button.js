import React from "react";
import '../App'

export default function Button({count , onClick}){

    return(
        <div>
        <div>
        <center>
            <button onClick={onClick}>Clicked {count} times.</button>
        </center>
        </div>
        </div>
    )
}