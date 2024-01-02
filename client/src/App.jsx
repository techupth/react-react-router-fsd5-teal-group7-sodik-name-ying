import "./App.css";
import CreateProductPage from "./pages/CreateProductPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import EditProductPage from "./pages/EditProductPage.jsx"
import ViewProductPage from "./pages/ViewProductPage.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return <div className="App">{
    
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/product/create" element={<CreateProductPage />} />
       <Route path="/product/edit/:productId" element={<EditProductPage />} />
       <Route path="/product/view/:productId" element={<ViewProductPage />}/>
       <Route path="*" />
      </Routes>
    </BrowserRouter>
    
  }</div>;
}

export default App;
