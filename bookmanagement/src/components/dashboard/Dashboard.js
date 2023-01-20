import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css'

function Dashboard(){
let[action,setAction]= useState(0);
let[data,setData] = useState([]);
const navigate = useNavigate();
useEffect(()=>{
const fetchData= async ()=>{
    let res = await axios.get('/book');
    console.log(res.data)
    setData(res.data)
}
fetchData();

},[])

const handleAdd =(e)=>{
    let action = e.target.value;
    if (action ==1){
    navigate('/addbook')

}
}
const handleUpdate =(e)=>{
    navigate('/updatebook',{
        state: {id:e.target.value
        },})
    } 




return(
<>
<div className="book">
<div className="book-actions">
<button value="1" onClick={handleAdd}>add book</button>
<button value="4">logout</button>
</div>
<div className="book-details">
<table className="book-tab">
    <thead>
    <th>Book Name</th>
    <th>Book Author</th>
    <th>Book Quantity</th>
    </thead>
   <tbody>
{ data.length ? data.map(ele=>(

    <tr id={ele.id}>
    <td >{ele.b_name}</td>
    <td>{ele.b_name}</td>
    <td>{ele.b_name}</td>
    <td>
    <button value={ele.id} onClick={handleUpdate}>update book</button>
    <button value={ele.id}>delete book</button></td>
    </tr>
    
)): <tr>no data</tr>

}</tbody>     
</table>
</div>
</div>

</>

)


}

export default Dashboard;