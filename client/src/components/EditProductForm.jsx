import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
function EditProductForm() {

const [name, setName] = useState("");
const [img, setImg] = useState("");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("");

let params = useParams();
const navigate = useNavigate()



const callData = async ()=>{
  const result = await axios.get(`http://localhost:4001/products/${params.productId}`)
  setName(result.data.data.name);
  setImg(result.data.data.imageUrl);
  setDescription(result.data.data.description)
  setPrice(result.data.data.price)
}



useEffect(()=>{
  callData()
},[])


const updateData = async () =>{
  const updateProduct = {
    name: name,
    image: img,
    price: price,
    description: description,
  }
  try {
    await axios.put(`http://localhost:4001/products/${params.productId}`, 
   updateProduct
    );
    Swal.fire({
      title: "Good job!",
      text: ` has been updated`,
      icon: "success"
    });

    navigate("/")
  } catch (error) {
    console.log(error);
  }
};


const handleSubmit = (e)=>{
  e.preventDefault();
  updateData();
}


  return (
    <form className="product-form" onSubmit={handleSubmit}> 
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
          value={name}
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {setName(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
          value={img}
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {setImg(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
          value={price}
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {setPrice(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
          value={description}
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {setDescription(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}


export default EditProductForm;