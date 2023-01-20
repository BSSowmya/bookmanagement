import axios from "axios";
import { useEffect,useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Updatebook(props){
   let [updatedata, setupdateData] =useState([]);
   let navigate =useNavigate();
   let[status,seStatus]= useState(false);
   let [data,setData] =useState({
    id :0,
    b_name:"",
    b_auth :"",
    b_quantity:0
   });
   
    const location = useLocation();
useEffect(()=>{
const fetchData=async()=>{
    let id = location.state.id.toString();
    let path = '/book/'+id 
    console.log(path)
    let res = await axios.get(path)
     setData((data)=>{
        return(
            {
                id:res.data.id,
                b_name :res.data.b_name,
                b_auth :res.data.b_auth,
                b_quantity :res.data.b_quantity
            }
        )
    })
  
}
fetchData();
console.log(data)
},[])
const boxStyle ={
    display : !status ? "block"  :"none"

}
const handleChange =(e)=>{
    setupdateData({
        ...updateData,[e.target.name]:e.target.value
    })
}
const updateData =async ()=>{
    let id = location.state.id.toString();
     let path = '/book/'+id 
    let res = await axios.put(path,data)
    if(res.data){
        navigate('/dashboard') 

    }else{
        navigate('/updatebook') 
    }
 }
return(
<>
{
!data.nil  ? (
<div style={boxStyle}>
<input type="text" value={data.id} disabled/>
<input type="text" defaultValue={data.b_name} onChange={handleChange}/>
<input type="text" defaultValue={data.b_auth} onChange={handleChange}/>
<input type="text" defaultValue={data.b_quantity} onChange={handleChange}/>
<input type="submit" onClick={updateData}/>
</div>):<div>Invalid Data</div>}
</>
)
}

export default Updatebook;