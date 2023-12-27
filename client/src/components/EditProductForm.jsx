import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProductForm() {
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const fixDataProduct = async () => {
    await axios.put(`http://localhost:4001/products/${params.productId}`, {
      name: textInput,
      price: priceInput,
      image: imageInput,
      description: descriptionInput,
    });
  };

  const fixInput = (e) => {
    e.preventDefault();
    fixDataProduct();
    navigate("/");
  };
  return (
    <form className="product-form" onSubmit={fixInput}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setImageInput(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setPriceInput(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setDescriptionInput(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          onClick={() => {
            fixInput();
          }}
        >
          Update
        </button>
      </div>
    </form>
  );
}
//.
export default EditProductForm;
