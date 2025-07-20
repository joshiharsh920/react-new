import FirstPage from "./FirstPage";
import Button from "./Button";
import './index.css';
import './App.css';
import './MyPage.css'
import HeaderFile from "./HeaderFile";
import DemoContent from "./DemoContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// var array=['Harsh','Joshi','Honey'];


function App() {
  return(
     <div className="bg-dark min-vh-100">
  <HeaderFile></HeaderFile>
   <FirstPage></FirstPage>
  <DemoContent></DemoContent>
  </div>
  );
}

export default App;