import { useState } from "react";
import FirstPage from "./FirstPage";
import './index.css';
import './App.css';
import './MyPage.css';
import HeaderFile from "./HeaderFile";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProjectsPage from "./ProjectPage";



function App() {
  const [showFirstPage, setShowFirstPage] = useState(false);

  const backgroundUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475";

  const appStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: '#fff', 
  };

  const [inputValue, setInputValue] = useState("");

  const handleClick=function(){
    debugger;
  alert("You entered"+inputValue);
  console.log(inputValue);
}

  return (
    <div style={appStyle}>
 
      <HeaderFile showPage={() => setShowFirstPage(true)} />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
       <input
        type="text" id="inputF"
        placeholder="Enter any value here"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        style={{ padding: "8px", width: "200px", borderRadius: "5px", marginBottom: "10px" }}
      />
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", borderRadius: "8px" }}
      >
        Click Me
      </button>
      <ProjectsPage></ProjectsPage>
    </div>
    
      {showFirstPage && <FirstPage />}
      
    </div>
  );
}

export default App;