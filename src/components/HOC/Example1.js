import React from "react";

const Hello = ({name}) => {
    return (
        <h1>Hello {name}</h1>
    )
}

// Компонент Высшего Порядка(HOC)
function displayWithName(WrappedComponent){
    return class extends React.Component{
        render(){
            return <WrappedComponent name="from HOC" {...this.props}/>
        }
    }
}

const Example1 = displayWithName(Hello)

export default Example1;