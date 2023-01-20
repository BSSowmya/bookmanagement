import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css'

function Dashboard(){
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
      navigate('/addbook')

}
const handleUpdate =(e)=>{
    navigate('/updatebook',{
        state: {id:e.target.value
        },})
 } 
 function refreshPage() {
    window.location.reload(false);
  }
const handleDelete=async(e)=>{
    let id = e.target.value;
    let path = '/book/'+id 
    console.log(path)
    let res = await axios.delete(path)
    console.log(res.data)
    if (res.data){
        navigate('/dashboard')
        refreshPage();
    }

}

const handelLogout =async()=>{
    let response =await axios.get('/logout');
    if (response.data){
        navigate('/')
    }
}

return(
<>
<div className="book">
<div className="book-actions">
<button value="1" onClick={handleAdd}>add book</button>
<button value="4" onClick={handelLogout}>logout</button>
</div>
<div className="book-details">
<table className="book-tab">
    <thead>
    <th>Book Name</th>
    <th>Book Author</th>
    <th>Book Quantity</th>
    <th>Actions</th>
    </thead>
   <tbody>
{ data.length ? data.map(ele=>(

    <tr id={ele.id}>
    <td >{ele.b_name}</td>
    <td>{ele.b_auth}</td>
    <td>{ele.b_quantity}</td>
    <td>
    <button value={ele.id} onClick={handleUpdate}>update book</button>
    <button value={ele.id}  onClick={handleDelete}>delete book</button></td>
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