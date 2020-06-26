import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css'

const CreatePost = (props)=>{

  const history=useHistory();
  const [title,settitle]=useState('')
  const [body,setbody]=useState('')
  const [image,setImage]=useState('')
  const [url,setUrl]=useState('')
 

useEffect(()=>{
if(url){
  fetch('http://localhost:5000/api/createpost',{
  method:"post",
  headers:{
    'Content-Type':'application/json',
    'Authorization':localStorage.getItem('jwt')
  },
  body:JSON.stringify({
    title:title,
    body:body,
    photo:url
  })
  }).then((res)=>res.json())
  .then((result)=>{

    if(result.post){
      M.toast({html:'Create post sucessfully',classes:'#dd2c00 deep-orange accent-4'})
      history.push('/')
    }else{
      M.toast({html:result.error,classes:"#1b5e20 green darken-4 accent-4"})
    }
  }) 
}
},[url])



const postDetails=()=>{
   
const data=new FormData()
data.append('file',image)
data.append('upload_preset','akshay-mern-stack')
data.append('cloud_name','demlvvssn')
  
fetch('https://api.cloudinary.com/v1_1/demlvvssn/image/upload',{
    method:'post',
    body:data
  }).then((res)=>res.json())
  .then((result)=>{
    setUrl(result.url)
  }).catch((err)=>{
    console.log(err)
  })
  }


    return(
      <div className="card input-field" style={{maxWidth:"500px",margin:"10px auto",padding:"15px",textAlign:"center"}}>
         <h1>Create Post</h1>
       <input type="text" 
       value={title}
       placeholder="Enter tittle" 
       onChange={(e)=>settitle(e.target.value)}
       />
       <input type="text"
        placeholder="Enter Body" 
        value={body}
        onChange={(e)=>setbody(e.target.value)}/>
       <div className="file-field input-field">
    <div className="btn">
      <span>UploadImage</span>
      <input type="file"  onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text"/>
    </div>
  </div>
  <button className="waves-effect #1b5e20 green darken-4 btn" onClick={()=>postDetails()}>CreatePost</button> 
      </div>
  ) 
}
export default CreatePost;