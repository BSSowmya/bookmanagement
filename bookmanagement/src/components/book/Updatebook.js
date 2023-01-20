import axios from "axios";
import { useEffect,useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Updatebook(props){
    let[id,setId] = useState(0);
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
    setId(location.state.id);
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
        ...updatedata,[e.target.name]:e.target.value
    })
   
}
const updateData =async ()=>{
   let path = '/book/'+id
   console.log(updatedata)
    let res = await axios.put(path,updatedata)
    console.log(res.data)
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
<div className="header">
<h4>Please enter all the details :</h4>
<input type="text"  name="id" value={data.id} disabled/>
<input type="text" name="b_name" placeholder= {data.b_name} onChange={handleChange}/>
<input type="text" name ="b_auth" placeholder={data.b_auth}  onChange={handleChange}/>
<input type="text"  name = "b_quantity" placeholder={data.b_quantity}  onChange={handleChange} />
<input type="submit" onClick={updateData}/>
</div>):<div>Invalid Data</div>}
</>
)
}

export default Updatebook;