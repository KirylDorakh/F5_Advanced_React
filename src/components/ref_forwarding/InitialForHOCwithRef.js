import React, {useRef} from "react";
import HOCwithRef from "./HOCwithRef";
import ComponentInHOC from "./ComponentInHOC";
import initial from "../HOC/example/Initial";

const NewComponenetWithHOC = HOCwithRef(ComponentInHOC);

const InitialForHOCwithRef = () => {
    const ref = useRef(null)
    return (
        <NewComponenetWithHOC ref={ref}/>
    )
}

export default InitialForHOCwithRef;