import React from "react";
import ComponentInHOC from "./ComponentInHOC";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const HOCwithRef = (Component) => {
    class HOCwithRef extends React.Component{
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('old props: ', prevProps);
            console.log('new props: ', this.props);
        }

        render(){
            const {forwardedRef, ...rest} = this.props
            // Передаём в качестве рефа проп "forwardedRef"

            return <Component ref={forwardedRef} {...rest} />;
        }
    }
    HOCwithRef.displayName = `HOCwithRef(${getDisplayName(Component)})`;

    return React.forwardRef((props, ref) => {
        return <HOCwithRef {...props} forwardedRef={ref}/>
    });
}

export default HOCwithRef;