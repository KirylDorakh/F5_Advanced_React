import React from 'react';

import "../styles/App.css"
import Form from "./Ref/Form";
import Animation from "./Ref/Animation";
import CurrentRef from "./Ref/CurrentRef";
import Parent from "./Ref/Parent";
import CallBackRef from "./Ref/CallBackRef";
import Example1 from "./HOC/Example1";
import CommentList from "./HOC/CommentList";
import Initial from "./HOC/example/Initial";
import CustomInput from "./Ref/CustomInput";
import CustomInput2 from "./ref_forwarding/CustomInput2";
import InitialForHOCwithRef from "./ref_forwarding/InitialForHOCwithRef";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.refForInput = React.createRef();
    }

    componentDidMount() {
        console.log(this.myRef)
        this.myRef.current.innerHTML = "hello refs"
    }

    render() {

        return <div>
            <h1>Example</h1>
            <div ref={this.myRef}>
                Hello world
            </div>

            <h1>Use 1</h1>
            <Form />

            <h1>Use 2</h1>
            <Animation />

            <h1>NodeRef ClassComponentRef</h1>
            <CurrentRef />

            <h1>Ref to Parent</h1>
            <Parent />

            <h1>Callback Ref</h1>
            <CallBackRef />


            {/* F5.4 HOC*/}
            <br /><hr />
            <h1>HOC</h1>
            <Example1 />
            <h1>HOC для сквозной функциональности</h1>
            {/*<CommentList />*/}
            <Initial />

            {/*F5.5 перенаправления рефов */}
            <br /><hr />
            <h1>ref forwarding</h1>
            <CustomInput2 ref={this.refForInput}/>
            <h3>Ref and HOC</h3>
            <InitialForHOCwithRef/>
        </div>
    }
}

export default App;