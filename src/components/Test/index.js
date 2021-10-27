//dependencies
import React from "react";
import { useHistory } from "react-router";

function Home() {
    const history = useHistory();
    return (
        <div className="App">
            test
            <button onClick={() => {
                history.push('/')
            }}>test2</button>
        </div>
    )
}

export default Home;