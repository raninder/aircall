import React, { useState,useEffect } from "react";
import ActivityDetail from "./ActivityDetail.jsx";
import { BsTelephoneInboundFill } from "react-icons/bs";
import {FiPhoneMissed } from "react-icons/fi";
import {useHistory} from "react-router-dom";
import { IconContext } from "react-icons";

import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link

} from "react-router-dom";


const Activity = (props) => {

  const { id,created_at,direction, from, to, duration, call_type} = props;
		const history = useHistory();
		let data= new Date(created_at);
		const time = data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
		console.log("time",time);
		const date = data.toDateString().slice(4);
		console.log("date",date);

  return (
   
   <div > 
		 <center>{date} </center>
		
		<div className="card">
				<div className="card-body">
						<p className="card-text">
						
							{call_type === "missed" ?
							<IconContext.Provider
							value={{ color: 'red' }}
						>
								<FiPhoneMissed /> 
								</IconContext.Provider>
							:
							<IconContext.Provider
							value={{ color: 'green' }}>
							<BsTelephoneInboundFill/>
							</IconContext.Provider>
						}
					
					<button onClick = {()=> history.push("/ActivityDetail",{id})}>{from}</button>
						<span className="right">{time} </span>
						 </p>
						 
				</div>		
			</div> 
		</div>
  );
}

export default Activity;