import React from "react";

const MessageActions = (props) => {
    const { element, handleAction } = props;
    return (
        <ul className="ulContainer">
            <li className="list">
                <button className="buttonStyles" onClick={()=> handleAction(element.id, "Block")}>Block</button>
            </li>
            <li className="list">
                <button className="buttonStyles" onClick={()=> handleAction(element.id, "Resolve")}>Resolve</button>
            </li>
        </ul>
    )
}

export default MessageActions;