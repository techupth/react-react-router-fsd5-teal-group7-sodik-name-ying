import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  const navigte =useNavigate()
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button onClick={()=>{navigte("/")}}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
