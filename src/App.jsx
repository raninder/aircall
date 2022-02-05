import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ArchiveDetail from './components/ArchiveDetail.jsx';
import Archive from './components/Archive.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import { IconContext } from "react-icons";
import { BsTelephoneFill } from "react-icons/bs";

import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <span> <h2>
        <IconContext.Provider
							value={{ color: 'green', size: '30px'}}>
        <BsTelephoneFill/>
        </IconContext.Provider>&emsp;
        Activity</h2>
      </span>
      <div className="container-view">
      <Router>
     
      <Link to="/ActivityFeed" className="btn btn-primary">All calls</Link>&emsp;&emsp;
      <Link to="/ArchiveDetail" className="btn btn-primary">Archives</Link>
      {/* <ActivityFeed/> */}
      <Switch>
        <Route path="/ActivityFeed">< ActivityFeed/></Route>
        <Route path="/ArchiveDetail">< ArchiveDetail/></Route>
        <Route path="/ActivityDetail">< ActivityDetail/></Route>
        <Route path="/Archive">< Archive/></Route>
        </Switch>
        </Router>
        
      </div>
    </div>

  );
};

 ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
