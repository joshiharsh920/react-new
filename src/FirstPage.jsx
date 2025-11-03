import Button from "./Button";
import jsonData from "./jsonData";


// var name='Harsh';
// var surname='Joshi';

function FirstPage(){
    return  <div className="container-fluid" style={{
        color: "white"
    }}>
       <div class="container my-5">
  <div class="p-4 bg-light rounded shadow-sm">
    <h3 class="mb-3 text-primary fw-bold">About Me</h3>
    <p class="text-secondary mb-2">
    {jsonData.data3}
    </p>
    <p class="text-secondary mb-2">
    {jsonData.data2[1]}
    </p>
    <p class="text-secondary mb-2">

      {jsonData.data2[0]}
    </p>
    <p class="text-secondary">
     
      {jsonData.data1}
    </p>
  </div>
</div>
        </div>
    
}

export default FirstPage;