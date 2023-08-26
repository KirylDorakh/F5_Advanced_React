import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.focusInput = this.focusInput.bind(this);
    }

    focusInput(){
        this.myRef.current.focus();
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <button onClick={this.focusInput}> focus the input</button>
            </div>
        )
    }
}

export default Form;