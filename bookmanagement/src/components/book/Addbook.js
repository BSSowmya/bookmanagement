import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './book.css'

function Addbook(){ 
      let navigate =useNavigate();

let[data,setData] = useState([]);

const handleChange =(e)=>{
    setData({
       ...data,[e.target.name]:e.target.value
    })
}

const sendData =async ()=>{
    let res = await axios.post('/book',data)
    console.log(res.data);
    if(res.data){
        navigate('/dashboard')
    }
}

return(
<>
<div className="header">
<h1>Add Book</h1>
<input name="b_name" placeholder="book name"  onChange={handleChange}/>
<input name="b_auth" placeholder="book author" onChange={handleChange}/>
<input name="b_quantity" placeholder="book quantity" onChange={handleChange}/>
<input type="submit"  className="btn-sub" onClick={sendData}/>
</div>
</>


)

}

export default Addbook;