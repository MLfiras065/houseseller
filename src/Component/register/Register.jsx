import React, { useState } from "react";
import axios from "axios";


const Register = ({ addUser }) => {
  
  const [image,setImage]=useState('')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handeRegister = (e) => {
    e.preventDefault();
    addUser(
      image,
      firstName, lastName, email, password, role);
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

  return (
    <div className="register">
       <input
            onChange={(e) => console.log(setImage(e.target.files[0]))}
            value={image}
          />
          <input type="file" onChange={(e) => handleImageUpload(e)} />
          <button onChange={handleImageUpload}>Upload Image</button>
      <div>
        <input
          type="text"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
     
      <div>
        <input
          type="text"
          placeholder="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button onClick={handeRegister}> Register</button>
    </div>
  );
};

export default Register;
