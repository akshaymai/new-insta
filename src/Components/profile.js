import React from 'react';

const Profile = (props) => (
    <div style={{maxWidth:'550px',margin:"0px auto"}} > 

        <div style={{display:"flex" ,justifyContent:"space-between",margin:"18px 0px",borderBottom:"1px solid black"}}>

        <div >
          <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
        </div>
        <div > 
        <h4>Akshay Maity's</h4>
        <div style={{justifyContent:"space-between",display:"flex",width:"108%"}}>
            <h6>20 post</h6>
            <h6>20 post</h6>
            <h6>20 post</h6>
            </div>
        </div>
         </div> 

         <div className="gallery">
         <img className="item" src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
         <img className="item" src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
         <img className="item" src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
         <img className="item" src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
         <img className="item" src="https://cdn1.dotesports.com/wp-content/uploads/2019/05/12144901/MSIFaker.jpg" />
        </div>    
    </div>
);
export default Profile;