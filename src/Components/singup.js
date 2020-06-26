import React,{useState}  from 'react';
import  M from 'materialize-css'
import {Link,useHistory} from 'react-router-dom'

const Singup = (props)=>{

const [name,Setnamee]=useState("")
const [email,Setemail]=useState("")
const [password,Setpassword]=useState("")
const history= useHistory()



const postDate=()=>{
 
if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
return M.toast({html:'Enter a valide email'})
} 
    fetch('http://localhost:5000/api/singup',{

        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({

            name:name,
            email:email,
            password:password
        })

    }).then((res)=>res.json())
     .then((result)=>{
         console.log(result)
       M.toast({html:result.body})
       history.push('/login')
     }).catch((err)=>{
       console.log(err)
        M.toast({html:err.error})
     })
}
 

    return(
        <div className="mycard">
        <div className="card auth-card input-field">
           <h1>Registration</h1>
           <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>Setnamee(e.target.value)} required />
           <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>Setemail(e.target.value)} required />
           <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>Setpassword(e.target.value)} required/>
           <button onClick={()=>postDate()} className="waves-effect #1b5e20 green darken-4 btn">SingUp</button>  
         <h5><Link to="/singin" >Alredy Registter</Link></h5>
         </div>
     </div>
    )
}
export default Singup;