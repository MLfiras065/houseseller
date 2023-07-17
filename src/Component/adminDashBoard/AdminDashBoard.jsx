import React, { useState } from "react";
import axios from "axios";
const AdminDashBoard = () => {
  const [update, setUpdate] = useState(false);
  const addCategory = (name, description) => {
    axios
      .post("http://localhost:3001/api/admin/addcat", {
        name: name,
        description: description,
      })
      .then(() => setUpdate(!update))
      .catch((err) => {
        console.log(err);
      });
  };
  const deletUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/admin/del/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handedelUser=(id)=>{
    deletUser(id)
  }
  const deletCustomer = (id) => {
    axios
      .delete(`http://localhost:3001/api/admin/del/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handldele=(id)=>{
    deletCustomer(id)
  }
  const acceptUser = (id) => {
    axios
      .put(`http://localhost:3001/api/admin/put/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const acceptCustomer = (id) => {
    axios
      .put(`http://localhost:3001/api/admin/put/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  return (<div>
    <div className="acceptedUsers">
      accepted users:
      <div>test1@gmail.com</div>
      <div>test2@gmail.com</div>
      <div>test3@gmail.com</div>
      <div>test4@gmail.com</div>
    <button onClick={handldele}></button>
    </div>
    <div className="acceptedClient">
      accepted client:
      <div>client1@gmail.com</div>
      <div>client2@gmail.com</div>
      <div>client3@gmail.com</div>
      <div>client4@gmail.com</div>
      <button onClick={handedelUser}></button>
    </div>
    <div className="static">
    <div>email:test@gmail.com</div>
   <br /> <div>selles :50%</div>
   <br /> <div> vistes  :30%</div>
   <br /> <div>email:test@gmail.com</div>
   <br /> <div>selles :50%</div>
   <br /> <div> vistes  :30%</div>
   <br /> <div>email:test@gmail.com</div>
   <br /> <div>selles :50%</div>
   <br /> <div> vistes  :30%</div>
   </div>
   <div>
    
   </div>
    
  </div>)
};

export default AdminDashBoard;
