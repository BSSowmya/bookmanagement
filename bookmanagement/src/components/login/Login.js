import { useState } from 'react';
import axios from "axios";
import './login.css'
import { useNavigate } from 'react-router-dom';
function Login(){
let [status,setStatus]= useState(false)    
let [data,setData] = useState([]);
const navigate = useNavigate();

function handleChange(e){
    setData({
    ...data,[e.target.name]:e.target.value
    }
    );
}

async function sendData(){
    console.log(data)
    let res = await axios.post('/login',data);
    console.log(res.data)
    setStatus(res.data) 
    if (status){
        navigate('/dashboard')

    }
    

}

return(
<>
<div className='login'>
<div className='login-input'>
<h1>Login page:</h1>
<input type="text" placeholder='email' name='u_email' onChange={handleChange}/>
<input type="password" placeholder='password' name='password'onChange={handleChange}/>
<input type="submit" onClick={sendData}/>
</div>
</div>
</>

)

}

export default Login;