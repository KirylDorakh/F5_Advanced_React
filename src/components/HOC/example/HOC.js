import React from "react";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function HOC(WrappedComponent){
    // return class extends React.ComponentInHOC{
    // or
    class HOC extends React.Component{
        constructor(props) {
            super(props);
        }
        render() {
            const {count, ...passThroughProps} = this.props
            const newCount = count + 1
            return (
                <WrappedComponent
                    count={newCount}
                    {...passThroughProps}
                />
            )
        }
    }

    HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    return HOC;

}

export default HOC;