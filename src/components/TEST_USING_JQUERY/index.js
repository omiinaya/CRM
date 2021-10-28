import React, { useEffect } from "react"
import { useHistory } from "react-router";
import { reset, testing } from './scripts'

function JQuery() {
    //componentDidMount
    useEffect(() => {
        testing() 
    }, []);

    const history = useHistory();
    return (
        <div>
            <script src="./scripts.js"></script>
            
            <div id="main" style={{width:'100%', height:'200px'}}></div>
            <button onClick={()=> { testing() }}>test1</button>
            <button onClick={()=> { history.push('/test') }}>test2</button>
            <button onClick={()=> { reset() }}>test3</button>
        </div>
    )
}

export default JQuery;