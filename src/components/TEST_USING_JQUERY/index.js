import React, { useEffect } from "react"
//import { useHistory } from "react-router";
import { reset, gridStart } from './scripts'

function JQuery() {
    //componentDidMount
    useEffect(() => {
        gridStart()
    }, []);

    //const history = useHistory();
    return (
        <div>
            <div id="main" style={{width:'100%', height:'200px'}}></div>
            <button onClick={()=> { gridStart() }}>Reload</button>
            <button onClick={()=> { reset() }}>Reset</button>
        </div>
    )
}

export default JQuery;