import React from "react";

class Animation extends React.Component{
    constructor(props) {
        super(props);
        this.animateRef = React.createRef();
        this.triggerAnimation = this.triggerAnimation.bind(this);
    }

    triggerAnimation(){
        this.animateRef.current.classList.add('animation_trigger');
    }

    render(){
        return (
            <div>
                <div className="animatedElementStyle" ref={this.animateRef}>
                    I am rendered!
                </div>
                <button onClick={this.triggerAnimation}>trigger animation</button>
            </div >
        )
    }
}

export default Animation;