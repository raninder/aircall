import React, {useEffect,useState } from "react";
import axios from "axios";
import Activity from "./Activity.jsx";

const ArchiveDetail = () => {
const [acts,setActs] = useState([]);

	 const url = "https://aircall-job.herokuapp.com/activities";
	 useEffect(() => {
			axios.get(url)
    		.then(response => {
						console.log("data",response.data);
						setActs(response.data);
     		})
    		.catch(error => {
      			console.log('Error: ' + error);
      	})
		}, []);

	 const allActs = acts.map((item) => {
		 if(item.is_archived === true)
	 			return <Activity key={item.id} {...item} />;
	 });
	

return(
	<div>
	 <p><h5> <center>Archived Calls </center></h5></p>
		<div >
			{allActs}
		</div>
	</div>
); 

}

export default ArchiveDetail;