import React from "react";
import { Route,Redirect } from "react-router-dom";
import Header from "./Component/Header";

function PrivateRoute({component,path,...rest}){
    let token = localStorage.getItem("token")
    return !!token ? <DashPanel path={path} component={component} {...rest}/> : <Redirect to="/"/>
}

export default PrivateRoute;

function DashPanel({component,path,...rest}){
    return(
        <Header>
            <Route path={path} {...rest} component={component}/> 
        </Header>
    )
}