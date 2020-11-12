import Nav from "../../components/Nav"
function Explore() {
    return (
        <div>
            <Nav />
            <div className="columns">
                <div className="column is-9 py-6">
                    Map goes here
                </div>
                <div className="column is-3 py-6">
                    live stream
                </div>
            </div>
        </div>

    );
}

export default Explore;