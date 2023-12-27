import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ViewProductPage() {
  const [getProductsitem, setGetProductsItem] = useState([]);
  const params = useParams();
  const id = params.productId;

  console.log(params);
  useEffect(() => {
    getProductsID();
  }, []);

  const getProductsID = async () => {
    const result = await axios.get(`http://localhost:4001/products/${id}`);
    setGetProductsItem(result.data.data);
    console.log(result);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{getProductsitem.name}</h2>
        <p>{getProductsitem.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
