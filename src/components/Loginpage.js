import React, {useEffect, useState} from 'react'
import Appbar from './Appbar';
import Logedin from './Logedin';


function Loginpage() {
    let [toggle, settoggle] = useState(false)
   useEffect(()=>{
    if(localStorage.getItem('email')&& localStorage.getItem('password')){
       //settoggle(true);
    }
   },[toggle])
    return (
        <div   >
          {
              !toggle ? <> <Appbar settoggle={settoggle} /></>:
              
              <>
              <Logedin/>
              </>
          }
        </div>
    )
}
export default Loginpage;