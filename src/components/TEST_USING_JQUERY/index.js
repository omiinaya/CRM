import React from "react"
import { testing } from './scripts'

function JQuery() {
    return (
        <div>
            <script src="./scripts.js"></script>
            
            <div id="main" style={{width:'100%', height:'200px', border: 'solid black 1px'}}></div>
            <button onClick={()=> { testing() }}>test</button>
        </div>
    )
}

export default JQuery;