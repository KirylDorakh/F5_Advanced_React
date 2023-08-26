import React from "react";

class TheChild extends React.Component{
    constructor(props) {
        super(props);
        this.childRef = React.createRef()
    }

    render() {
        return(
            <div>
                <button
                    ref={this.childRef}
                    onClick={event => {
                        this.props.getRefFromChild(this.childRef)
                    }}
                >
                    Send a Ref to Parent
                </button>
            </div>
        )
    }
}

export default TheChild