import React from "react";
import CustomInput from "./CustomInput";

class CurrentRef extends React.Component{
    constructor(props) {
        super(props);
        this.domNodeRef = React.createRef();
        this.classComponentRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.domNodeRef)
        console.log(this.classComponentRef);
    }

    render(){
        return (
            <div>
                <div className="Node" ref={this.domNodeRef}>Hello world</div>
                <CustomInput ref={this.classComponentRef}/>
            </div >
        )
    }
}

export default CurrentRef;