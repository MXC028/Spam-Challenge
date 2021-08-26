import React from "react";
import MessageRow from "../MessageRow";
const MessageList = (props) => {
    const { handleAction, reportsData } = props;
    return (
        <React.Fragment>
            {reportsData.map(function (element) {
                return (
                <MessageRow key={element.id} element={element} handleAction={handleAction} />
                );
            })}
        </React.Fragment>
    )
}

export default MessageList;