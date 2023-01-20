import './signup.css'

function Signup(){
return(
<>
<div className="signup">
<div className="signup-input">
<h3>Please enter the following details to create account</h3>
<input type="text" placeholder="name" name="u_name"/>
<input type="text" placeholder='email' name="u_email"/>
<input type="password" placeholder='password'name="password"/>
</div>
</div>
</>
)
}

export default Signup;