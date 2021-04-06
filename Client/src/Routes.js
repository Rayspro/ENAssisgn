import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Private from "./PrivateRoutes";
import Public from "./PublicRoutes";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AllUser from "./Pages/AllUser";
import AddUser from "./Pages/AddUser";

function Routes() {
  return (
    <div className="Routes">
        <BrowserRouter>
            <Switch>
                <Public exact path="/" component={Login}/>
                <Private path="/dashboard" component={Dashboard}/>
                <Private path="/allUser" component={AllUser}/>
                <Private path="/addUser" component={AddUser}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Routes;