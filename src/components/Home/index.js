//dependencies
import React, { useState } from "react";
 
//components
import Grid from '../Grid'
import Sidebar from '../Sidebar'
import Default from '../Default'
import JQuery from '../TEST_USING_JQUERY'

function Home() {
    const [drawer, setDrawer] = useState(0);
    console.log(drawer)
    return (
        <div>
            <Sidebar state={drawer} fn={ () => {setDrawer() }} content={
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