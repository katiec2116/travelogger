import React from "react";
import LiveStream from "../../components/LiveStream";
import Nav from "../../components/Nav"


function Explore() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="columns">
                    <div className="column is-9 py-6">
                        Map goes here
                    </div>
                    <div className="column is-3 py-6">
                        <LiveStream />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Explore;