import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { AddUser } from "../../Redux/actions/listUser.action";

function AllUser({ AddUser }) {

  const [user, setUser] = useState({
    uname:"",
    fname:"",
    lname:"",
    email:"",
    password:"",
    hobbie:"",
    admin:false
  })

  function add(){
    AddUser(user)
  }

  return (
    <div className="add-root">
      <div>
        <input onChange={(e)=>setUser({...user,uname:e.target.value})} placeholder="Username"/>
        <input onChange={(e)=>setUser({...user,fname:e.target.value})} placeholder="First name"/>
        <input onChange={(e)=>setUser({...user,lname:e.target.value})} placeholder="Last name"/>
        <div className="switch">
          <div onClick={()=>setUser({...user,type:false})} className={user.type?"sw":"sw-active"}>User</div>
          <div onClick={()=>setUser({...user,type:true})} className={user.type?"sw-active":"sw"}>Admin</div>
        </div>
        <input onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email name"/>
        <input onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"/>
        <input onChange={(e)=>setUser({...user,hobbie:e.target.value})} placeholder="Hobby"/>
      </div>
      <button className="addUser" onClick={()=>add}>Add User</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(null, {AddUser})(AllUser);
