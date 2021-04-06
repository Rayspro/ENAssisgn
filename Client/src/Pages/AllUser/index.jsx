import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  ListUserAction,
  DeleteUser,
  UpdateUser
} from "../../Redux/actions/listUser.action";

function AllUser({ ListUserAction, userList, total, DeleteUser, UpdateUser }) {
  const [active, setActive] = useState(1);
  const [nextActive, setNextActive] = useState(false);
  const [preActive, setPreActive] = useState(true);
  const [slideActive,setSlideActive] = useState("disable")
  const [updateVal, setUpdate] = useState({
    lname:"",
    fname:"",
    email:"",
    uname:"",
    id:""
  });

  useEffect(() => {
    ListUserAction(active);
  }, [active]);

  useEffect(() => {
    setSlideActive("disable")
  }, [userList])

  useEffect(() => {
    if (active == total) {
      setNextActive(true);
    } else {
      setNextActive(false);
    }

    if (active == 1) {
      setPreActive(true);
    } else {
      setPreActive(false);
    }
  }, [active]);

  function next() {
    setActive(active + 1);
  }

  function prev() {
    setActive(active - 1);
  }

  function update(data){
    setUpdate({
      lname:data.lname,
      fname:data.fname,
      email:data.email,
      uname:data.uname,
      id:data._id
    })
    setSlideActive("active")
  }

  function valUpdate(){
    
    UpdateUser({...updateVal})
  }

  return (
    <div className="all-root">
      <div className="top-header">
        <button>Add User</button>
        <div>{"Page : " + active + "/" + total}</div>
        <div>
          <button onClick={prev} disabled={preActive}>
            Previous
          </button>
          <button onClick={next} disabled={nextActive}>
            Next
          </button>
        </div>
      </div>
      <div className={`slide-root-${slideActive}`}>
        <div>
          <input value={updateVal.uname} onChange={(e)=>setUpdate({...updateVal,uname:e.target.value})} placeholder="Username" />
          <input value={updateVal.fname} onChange={(e)=>setUpdate({...updateVal,fname:e.target.value})} placeholder="fname" />
          <input value={updateVal.lname} onChange={(e)=>setUpdate({...updateVal,lname:e.target.value})} placeholder="lname" />
          <input value={updateVal.email} onChange={(e)=>setUpdate({...updateVal,email:e.target.value})} placeholder="email" />
        </div>
        <button onClick={valUpdate}>Update</button>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
            {userList.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.uname}</td>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.email}</td>
                  <td onClick={() => DeleteUser(data._id)} className="delete">
                    Delete
                  </td>
                  <td onClick={()=>{update(data)}} className="modify">Modify</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList.user,
    total: state.userList.totalPage,
  };
};

export default connect(mapStateToProps, { ListUserAction, DeleteUser, UpdateUser })(
  AllUser
);
