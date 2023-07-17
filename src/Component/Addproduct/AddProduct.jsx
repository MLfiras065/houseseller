import React,{useState,useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie";
const AddProduct = () => {
  const email = Cookies.get("registeredUser")
  const[image,setImage]=useState('')
  const [location, setLocation] = useState("");
  const [numbOfrooms, setNumbOfrooms] = useState("");
  const [numbOfBathroom, setNumbOfBathroom] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [update, setUpdate] = useState(false);
  const[userId,setUserId]=useState("")
  

  const addHome = (image,location, numbOfrooms, numbOfBathroom, area, price) => {
    axios
      .post("http://localhost:3001/api/user/addHome", {
        image,
        location: location,
        numbOfrooms: numbOfrooms,
        numbOfBathroom: numbOfBathroom,
        area: area,
        price: price,
      })
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  const handlAdd=()=>{
    addHome(image,location,numbOfrooms,numbOfBathroom,area,price)
  }
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
  useEffect(()=> {
    axios
    .get(`http://localhost:3001/api/user/get/${email}`)
    .then((response) => {
      setUserId(response.data._id);
      console.log("user", userId);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  return (
    <div  className="addproduct"  >
        <input
            onChange={(e) => console.log(setImage(e.target.files[0]))}
            value={image}
          />
          <input type="file" onChange={(e) => handleImageUpload(e)} />
          <button onChange={handleImageUpload}>Upload Image</button>
      
      <div>
    <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="numbOfrooms"
          value={numbOfrooms}
          onChange={(e) => setNumbOfrooms(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="numbOfbathroom"
          value={numbOfBathroom}
          onChange={(e) => setNumbOfBathroom(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button onClick={handlAdd}>Add house</button>
    </div>
  );
};

export default AddProduct;