import React,{useState}  from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Singin = (props)=>{

  const history=useHistory();
  const [email,Setemail]=useState("")
  const [password,Setpassword]=useState("")

  const logindata=()=>{
  
if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
  return M.toast({html:'Enter a valide email'})
  } 

    fetch('http://localhost:5000/api/login',{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email:email,
          password:password
      })

  }).then((res)=>res.json())
    .then((result)=>{
     
      console.log("result",result)
      if(result.error){
        M.toast({html:result.error,classes:'#dd2c00 deep-orange accent-4'})
      }
    else{
      M.toast({html:"Login sucessfully",classes:'#1b5e20 green darken-4 accent-4'})
      localStorage.setItem('jwt',result.token)
      localStorage.setItem('user',JSON.stringify(result.user))
      history.push('/')
    }
    }).catch((err)=>{
      console.log(err);
    })

  }



  return (
    <div className="mycard">
    <div className="card auth-card input-field">
   <h2>Login</h2>
    <input type="email" 
    placeholder="Enter Email"
    value={email}
    onChange={(e)=>Setemail(e.target.value)}
    required
     />    
    <input type="password" 
    placeholder="Enter Password" 
    value={password}
    onChange={(e)=>Setpassword(e.target.value)}
    required/>
    <button onClick={()=>logindata()} className="waves-effect #1b5e20 green darken-4 btn">Login</button>  
  <h5>  <Link to="/singup" >Don't Have Account</Link> </h5>

    </div>
   </div>
  )
}

export default Singin;