import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ViewProductPage() {
  const [display,setDisplay] = useState("")
  const params= useParams()
  console.log(params)

  const navigte = useNavigate()

  const getViewProduct =async()=>{
    const result = await axios.get(`http://localhost:4001/products/${params.productId}`)
    console.log(result.data.data)
    setDisplay(result.data.data);
  }

  useEffect(()=>{
    getViewProduct()
  },[])


  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{display.name}</h2>
        <p>{display.description}</p>
      </div>
      <button onClick={()=>{navigte("/")}}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
