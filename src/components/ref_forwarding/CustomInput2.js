import React from "react";


const CustomInput2 = React.forwardRef((props, ref) => {
    const focusInput = (ref) => {
        ref.current.focus()
    }
    return(
        <>
            <label onClick={() => focusInput(ref)}>Click Me!</label>
            <input ref={ref} type="text" {...props} />
        </>
    )
})

export default CustomInput2;