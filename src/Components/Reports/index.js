import React, {useEffect} from "react";
import reports from "../../data/reports.json";
import MessageList from "../MessageList";
const Reports = () => {
  // store elements data to data variable
  const reportsData = reports.elements;

  // handleAction function will be called on Block/Resolve button press.
  // handleAction takes in the id, and accepts a string as the second argument. Action will be "Block" or "Resolve"
  // handleAction will then call our server and write the necessary data to the reports.json file in the data folder.
  function handleAction(idProvided, action) {
    //   console.log(idProvided);
    //   console.log(action);

    fetch("/reports/:" + idProvided, {
      method: "PUT",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        actionPerform: action,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    console.log("data change");
  }, [reportsData]);

  return (
    <div>
      <h1>Reports</h1>
      <div className="container">
          <MessageList handleAction={handleAction} reportsData={reportsData} />
      </div> 
    </div>
  );
};

export default Reports;
