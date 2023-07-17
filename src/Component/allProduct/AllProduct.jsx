import React, { useEffect, useState } from "react";

import axios from "axios";
const AllProduct = ({ el }) => {
  
  const[image,setImage]=useState('')
  const [location, setLocation] = useState("");
  const [numbOfrooms, setNumbOfrooms] = useState("");
  const [numbOfBathroom, setNumbOfBathroom] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [update, setUpdate] = useState(false);

  const [up, setUp] = useState(false);
  const handleExit = () => {
    setLocation("");
    setNumbOfrooms("");
    setNumbOfBathroom("");
    // setImage("");
    setArea("");
    setPrice("");
    setUp(false);
  };
  const fetchData=()=>{
    axios.get('http://localhost:3001/api/user/get').then((result)=>{
      // setData(result)
      console.log(result);
    }).catch((err)=>{
      console.log(err)
    })
  }
  const upHome = (id,location,numbOfrooms,numbOfBathroom,area,price) => {
    axios
      .put(`http://localhost:3001/api/user/up/${id}`, {
        location:location,
        numbOfrooms:numbOfrooms,
        numbOfBathroom:numbOfBathroom,
        area:area,
        price:price,
      })
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handlUp=(id)=>{
    upHome(id,location,numbOfrooms,numbOfBathroom,area,price)
    setUp(false)
  }
  const deleteHome = (id) => {
    axios
      .delete(`http://localhost:3001/api/user/del/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "product");
    
    try {
      const response = await axios.post(
      
        "https://api.cloudinary.com/v1_1/dzonlv8oi/image/upload",

        formData
      );

      console.log("Image uploaded successfully:", response.data);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
 useEffect(()=>fetchData(),[update])
  return (
    <div  style={{ width: "340px", maxWidth: "150%", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="img"><img src={el.image} alt="" /></div>
      <div>{el.location}</div>
      <div>{el.numbOfrooms}</div>
      <div>{el.numbOfBathroom}</div>
      <div>{el.area}</div>
      <div>{el.price}</div>
      
      {up && (
        <div  className="update">
          <button onClick={handleExit}>Exit</button>
          <input
            onChange={(e) => console.log(setImage(e.target.files[0]))}
            value={image}
          />
          <input type="file" onChange={(e) => handleImageUpload(e)} />
          <button onChange={handleImageUpload}>Upload Image</button>
      
          <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="text" value={numbOfrooms} placeholder="numbOfrooms" onChange={(e) => setNumbOfrooms(e.target.value)} />
          <input
            type="text"
            value={numbOfBathroom}
            placeholder="numbOfBathroom"
            onChange={(e) => setNumbOfBathroom(e.target.value)}
          />
          <input  type="text" value={area} placeholder="area" onChange={(e) => setArea(e.target.value)} />
          <input value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} />
          <button
            onClick={()=>handlUp(el.id)}
          >
            update &#9997;{" "}
          </button>
        </div>
      )}
      <button onClick={() => setUp(!up)}>PRESS TO UPDATE</button>
      <button onClick={() => deleteHome(el.id)}>delete</button>
    </div>
  );
};

export default AllProduct;
