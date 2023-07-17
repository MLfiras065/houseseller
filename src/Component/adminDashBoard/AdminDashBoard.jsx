import React, { useEffect, useState } from "react";
import axios from "axios";
const AdminDashBoard = () => {
  const [update, setUpdate] = useState(false);
  const [data,setData]=useState([])
  const get=()=>{
    axios.get("http://localhost:3001/api/user/").then((response)=>{
setData(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  const getCust=()=>{
    axios.get("http://localhost:3001/api/customer/").then((response)=>{
setData(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
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
  useEffect(()=>{get()},[])
  return (<div>
      {data.map((el, index) => (
      <div className="acceptedUsers" key={index}>
           accepted users:
            <div>{el.email}</div>
            <div >
     
  
    <button onClick={()=>handedelUser(el.id) }>delete</button>
    </div>
      </div>
    ))
    }
    
    <div className="acceptedClient">
    {data.map((el, index) => (
      <div className="acceptedUsers" key={index}>
           accepted Client:
            <div>{el.email}</div>
            <div >
     
  
    <button onClick={()=>handldele(el.id) }>delete</button>
    </div>
      </div>
    ))
    }
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
