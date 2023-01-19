import React , { useState }from "react";
import '../App'
import propTypes from 'prop-types';
export default function Header(){
    let aTagStyle = {
       textDecoration : "none"
    }

    let useStateVar = "{ useState }"
    return(
        <div>
        <center>
        <a href="https://www.github.com/tarunsraina" style={aTagStyle}>github  </a>
        |
        <a href="https://www.codechef.com" style={aTagStyle}>  codechef  </a>
        |
        <a href="https://www.cumulations.com" style={aTagStyle}>  company  </a>
        <center className="HeaderTitle">
            <h3>useState-Displaying/Updating DOM </h3> 
        </center>

        <center>
            <h4><u>Updating DOM with useState Hook</u></h4>
        </center>

        <p>Functions starting with <code className="code-logic">use</code> are called Hooks. <br/><code className="code-logic">useState</code> is a built-in Hook provided by React.</p>
        <a href="https://beta.reactjs.org/reference/react" target="_blank">You can find other built in Hooks here</a>

        <h5>First, import <i> <code>useState</code> </i>from React:</h5>
        <div >
        <code className="code-logic">import {useStateVar} from 'react';</code>
        <p>Now you can declare a state variable inside your component:</p>
        <code className="code-logic">const [count, setCount] = useState(0);</code>
        <p>You will get two things from useState: the current state (count), and the function that lets you update it (setCount).<br/>
        The first time the button is displayed, count will be 0 because you passed 0 to useState(). <br />When you want to change state, call setCount() and pass the new value to it.</p>
        <p>Convention : <code className="code-logic">[something, setSomething]</code></p>
        <h2><u>Designing count Incrementor and decrementor using useState</u></h2>
        </div>
        </center>
        </div>
    )
}

Header.propTypes = {
    title : propTypes.string
}

Header.defaultProps = {
    title : "Default title"
}