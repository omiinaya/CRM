//dependencies
import React from "react";

//components
import Grid from '../Grid'
import Sidebar from '../Sidebar'
import Default from '../Default'
import JQuery from '../TEST_USING_JQUERY'

function Home() {
    return (
        <div>
            <Sidebar content={
                <div>
                    <Default />
                    <Grid />
                    <JQuery />
                </div>
            } />
        </div>
    )
}

export default Home;