import React from "react";
import Used from "./Used";
import HOC from "./HOC";

const NewComponent = HOC(Used)

class Initial extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            countNum: 0
        }
    }

    counting = () => {
        this.setState({countNum: this.state.countNum + 1})
    }

    render() {
        return (
            <>
                <Used name='Used' count={this.state.countNum}/>
                <NewComponent name="wrapped Component in HOC" count={this.state.countNum}/>
                <button onClick={this.counting}>Count</button>
            </>
        )
    }
}

export default Initial;