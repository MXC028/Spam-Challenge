import React from "react";
import MessageActions from "../MessageActions"

const MessageRow = (props) => {
   const { element, handleAction } = props;
    return (
      <div className="section" key={element.id} style={element.ticketState === "RESOLVED" || element.ticketState === "CLOSED" ? { display: "none" } : null}>
        <div className="columns">
          <ul className="ulContainer">
            <li className="list">Id: {element.id}</li>
            <li className="list">State: {element.state}</li>
            <a className="detailsStyling" href="#">Details</a>
          </ul>
        </div>
        <div className="columns">
          <ul className="ulContainer">
            <li className="list">Type: {element.payload.reportType}</li>
            <li className="list">Message: {element.payload.message ? ( element.payload.message) : (<span className="noMessage">No Message.</span>)}</li>
          </ul>
        </div>
        <div className="columns">
          <MessageActions element={element} handleAction={handleAction} />
        </div>
      </div>
    )
}

export default MessageRow;