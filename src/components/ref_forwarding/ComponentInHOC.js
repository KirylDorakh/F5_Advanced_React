import React from "react";

const ComponentInHOC = React.forwardRef(
    function NameComponentInHOC(props, ref) {

    const focusInput = (ref) => {
        ref.current.focus()
    }
    return (
        <>
            <label onClick={() => focusInput(ref)}>Click Me!</label>
            <input ref={ref} type="text" />
        </>
    )
})

export default ComponentInHOC;