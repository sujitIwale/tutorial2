import React from 'react';
import './Navigation.css';


const Navigation = () => {
    return (
     <div>
        
       
            <ul className='pa1'>
            
              
                <div className=' ' style={{display:'flex' }}>
                
                   <li className='pad f2  dim link  pointer pa3 underline'>Courses</li> 
                   <li className='pad f2  dim link  pointer pa3 underline'>Sources</li>
                   <li className='pad f2  dim link  pointer pa3 underline'>About</li>
                   <li className='pad f2  dim link  pointer pa3 underline'>Contact</li>
                   <li className='f2 dim link black pointer pa3 underline ' style={{display:'flex',justiftent:'flex-end', color :'orange'}}>Sign In</li>
                   <li className='f2 dim link black pointer pa3 underline ' style={{display:'flex',juyContent:'flex-end' ,color :'orange'}}>Sign Out</li>
                   
                </div>

               
                
              

            </ul>
       
      
            
            
        </div>
            
        
    );
}

export default Navigation;