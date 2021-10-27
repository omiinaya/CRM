import React from "react"
import { useHistory } from "react-router";
import { testing } from './scripts'

function JQuery() {
    const history = useHistory();
    return (
        <div>
            <script src="./scripts.js"></script>
            
            <div id="main" style={{width:'100%', height:'200px'}}></div>
            <button onClick={()=> { testing() }}>test</button>
            <button onClick={()=> { history.push('/test') }}>test2</button>
        </div>
    )
}

export default JQuery;