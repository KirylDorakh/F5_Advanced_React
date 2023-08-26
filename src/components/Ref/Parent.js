import React from "react";
import TheChild from "./TheChild";

class Parent extends React.Component {
    getRefFromChild(param){
        console.log(param)
    }

    render() {
        return (
            <TheChild getRefFromChild={this.getRefFromChild.bind(this)}/>
        )
    }
}

export default Parent