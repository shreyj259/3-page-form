import React, { useState, useRef } from "react";
import './form.css'

const FormComponent = () => {
  const [formData, setFormData] = useState({
    matchType: "",
    startDate: "",
    endDate: "",
    matchLocation: "",
    tournamentName: "",
    comment: "",
    team1: "",
    team2: "",
    homeAway1: "",
    homeAway2: "",
  });
  const [activeForm, setActiveForm] = useState(0);
  const [outputTable,setOutputTable]=useState();
  const startTime = useRef();
  const endTime = useRef();

  const handleChange = (e, type) => {
    const temp = { ...formData };
    if (type === "matchType") {
      temp.matchType = e.target.value;
    }
    if (type === "startDate") {
      temp.startDate = e.target.value;
    }
    if (type === "endDate") {
      temp.endDate = e.target.value;
    }
    if (type === "matchLocation") {
      temp.matchLocation = e.target.value;
    }
    if (type === "tournamentName") {
      temp.tournamentName = e.target.value;
    }
    if (type === "comment") {
      temp.comment = e.target.value;
    }
    if (type === "team1") {
      temp.team1 = e.target.value;
    }
    if (type === "team2") {
      temp.team2 = e.target.value;
    }
    if (type === "homeAway1") {
      temp.homeAway1 = e.target.value;
    }
    if (type === "homeAway2") {
      temp.homeAway2 = e.target.value;
    }
    setFormData(temp);
  };

  const handleSubmit=()=>{
   const Table=<table border="1">
      <tr>
        <th>Team 1</th>
        <th>Team 2</th>
        <th>Match Type</th>
        <th>Tournament Name</th>
        <th>Start Date & Time</th>
        <th>End Date & Time</th>
        <th>Location</th>
        <th>Comments</th>
      </tr>
      <tr>
        <td>{formData.team1}</td>
        <td>{formData.team2}</td>
        <td>{formData.matchType}</td>
        <d>{formData.matchType==="tournament"?formData.tournamentName:"--"} </d>
        <td>{formData.startDate}</td>
        <td>{formData.endDate}</td>
        <td>{formData.matchLocation}</td>
        <td>{formData.comment}</td>
      </tr>
    </table>
    setOutputTable(Table);
  }


  const output = [
    <form id="1">
      <div className="container">
        <div className="row">
          <select
            value={formData.matchType}
            onChange={(e) => handleChange(e, "matchType")}
          >
            <option>Match Type</option>
            <option value="friendly">Friendly</option>
            <option value="tournament">Tournament</option>
          </select> <br/>
        </div>
      </div>
    </form>,
    <form id="2">
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              ref={startTime}
              placeholder="Start Date & Time"
              value={formData.startDate}
              onChange={(e) => {
                handleChange(e, "startDate");
              }}
              onFocus={() => (startTime.current.type = "datetime-local")}
            />  <br/>
          </div>
          <div className="col">
            <input
              type="text"
              ref={endTime}
              placeholder="End Date & Time"
              value={formData.endDate}
              onChange={(e) => {
                handleChange(e, "endDate");
              }}
              onFocus={() => (endTime.current.type = "datetime-local")}
            />  <br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={formData.matchLocation}
              onChange={(e) => {
                handleChange(e, "matchLocation");
              }}
              placeholder="Match Location"
            />  <br/> 
            {formData.matchType==="tournament"?<input
              type="text"
              value={formData.tournamentName}
              onChange={(e) => {
                handleChange(e, "tournamentName");
              }}
              placeholder="Tournament Name"
            />:""}
          </div>
          <div className="col">
            <textarea
            rows="20"
              placeholder="Comments"
              value={formData.comment}
              onChange={(e) => {
                handleChange(e, "comment");
              }}
            ></textarea> <br/>
          </div>
        </div>
      </div>
    </form>,
    <form id="3">
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              value={formData.team1}
              onChange={(e) => {
                handleChange(e, "team1");
              }}
              placeholder="Team 1 Name"
            />  <br/>
          </div>
          <div className="col">
            <select
              value={formData.homeAway1}
              onChange={(e) => handleChange(e, "homeAway1")}
            >
              <option>Home or Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>  <br/>
          </div>
        </div>
        <div className="row"><div className="col-s"><hr/></div>
        <div className="col-s">vs</div>
        <div className="col-s"><hr/></div></div>
        
        <div className="row">
          <div className="col">
            <input
              value={formData.team2}
              onChange={(e) => {
                handleChange(e, "team2");
              }}
              placeholder="Team 2 Name"
            />  <br/>
          </div>
          <div className="col">
            <select
              value={formData.homeAway2}
              onChange={(e) => handleChange(e, "homeAway2")}
            >
              <option>Home or Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>  <br/>
          </div>
        </div>
      </div>
    </form>,
  ];

  return (
    <div>
      <div className="header">{activeForm+1}/3</div>
      {output[activeForm]}
      <div className="btn-container">
        {activeForm !== 0 ? (
          <button
            onClick={() => {
              setActiveForm((activeForm) => activeForm - 1);
            }}
          >
            Back
          </button>
        ) : (
          ""
        )}
        {activeForm !== 2 ? (
          <button
            onClick={() => {
              setActiveForm((activeForm) => activeForm + 1);
            }}
          >
            Next
          </button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      <div className="table-wrapper">
      {outputTable}
      </div>
      
    </div>
  );
};

export default FormComponent;
