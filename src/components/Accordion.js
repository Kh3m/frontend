import React, { useState, useRef } from "react";


function Accordion(props) {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <>
            <div className={`btn btn-secondary accordion boxes ${active}`}
                onClick={toggleAccordion}
            >{props.children}</div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="panel boxes"
            >
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>

        </>
    );
}

export default Accordion;