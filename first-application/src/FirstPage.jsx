import Button from "./Button";
import './'

var name='Harsh';
var surname='Joshi';

function FirstPage(){
    return <> <div className="container-fluid" style={{
        color: "white"
    }}>
        <div className="text-center" >
             <h3 >Hi Harsh</h3>
            <p>
                This is a second div with {name} and full name is {name+" "+surname}. 
            </p>
            <Button></Button></div>
        </div></>
    
}

export default FirstPage;