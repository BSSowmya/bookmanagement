import axios from "axios";
import { useState } from "react";

function Addbook(){
let[data,setData] = useState([]);

const handleChange =(e)=>{
    setData({
       ...data,[e.target.name]:e.target.value
    })
}

const sendData =async ()=>{
    let res = await axios.post('/book',data)
    console.log(res.data);
}

return(
<>
<h1>Add Book</h1>
<input name="b_name" placeholder="book name"  onChange={handleChange}/>
<input name="b_auth" placeholder="book author" onChange={handleChange}/>
<input name="b_quantity" placeholder="book quantity" onChange={handleChange}/>
<input type="submit" onClick={sendData}/>
</>


)

}

export default Addbook;