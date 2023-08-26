import React from "react";

class Used extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p>Hello from {this.props.name}</p>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default Used