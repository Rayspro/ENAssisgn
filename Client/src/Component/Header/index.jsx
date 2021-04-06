import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

function Header({ children, history,admin }) {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const list = [
    { name: "Home", route: "/dashboard" },
  ]

  const listAdmin = [
    { name: "Home", type:false, route: "/dashboard" },
    { name: "All User", type:true, route: "/alluser" },
    { name: "Add User",type:true, route: "/adduser" },
  ];

  function logout(){
    localStorage.clear()
    history.push("/")
  }

  useEffect(()=>{
    console.log("admin",admin)
  },[localStorage.getItem("type")])

  useEffect(() => {
    if(history.location.pathname.toLowerCase() === "/dashboard"){
      setActive(0);
    }
    if(history.location.pathname.toLowerCase() === "/alluser"){
      setActive(1);
    }
    if(history.location.pathname.toLowerCase() === "/adduser"){
      setActive(2);
    }
  }, []);

  function change(i, route) {
    setActive(i);
    history.push(route);
  }

  return (
    <div className="header-root">
      <div className="header">
        <ul>
          {console.log(menu)}
          {(admin.type?listAdmin:list).map((data, index) => {
            return (
              <li
                onClick={() => change(index, data.route)}
                className={active === index ? "active" : "disable"}
                key={index}
              >
                {data.name}
              </li>
            );
          })}
        </ul>
        <div onClick={logout}>Logout</div>
      </div>
      {children}
    </div>
  );
}

const mapsStateToProps = state =>{
  return {
    admin:state.user
  }
}

export default withRouter(connect(mapsStateToProps,null)(Header));
