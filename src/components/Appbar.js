import React, { useState } from 'react'
import '../components/Assets/Add to Wishlist.svg'

function Appbar(props) {
    let [email, setemail] = useState('Email');
    let [password, setpassword] = useState('password');
    let [show, setshow] = useState(true);

    const handleemail = e => {
        setemail(e.target.value)
    }
    const handlepassword = e => {
        setpassword(e.target.value)
    }
    const handlevalidate = () => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password) && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            props.settoggle(true);
        }


    }
    const handlehidepassword = () => {
        setshow(false);
    }
    const handleshow=()=>{
        setshow(true)
    }
    return (

        <div className='logpage' >
            <section className='appbar' >
                <h1>TV2Z</h1>
                <h1>LOGIN</h1>
            </section>
            <section className='downappbar' >
                <h2>Login</h2>
                <p>Enter your credentials to login to tvz2</p>
                <input type={'text'} placeholder={"email"} onChange={handleemail} />
                <input type={show?'password':'text'} placeholder={password} onChange={handlepassword} />
                {
                    show ? <>
                        <svg onClick={handlehidepassword} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L21 21" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.5 10.677C10.1631 11.0585 9.98425 11.5541 10 12.0629C10.0158 12.5716 10.2249 13.0552 10.5848 13.4151C10.9448 13.7751 11.4284 13.9842 11.9371 14C12.4459 14.0157 12.9415 13.8369 13.323 13.5" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.362 7.56104C5.68 8.74004 4.279 10.42 3 12C4.889 14.991 8.282 18 12 18C13.55 18 15.043 17.477 16.395 16.65" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 6C16.008 6 18.701 9.158 21 12C20.6705 12.5208 20.3105 13.0216 19.922 13.5" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </> : <>
                        <svg  onClick={handleshow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </>
                }

                <br />
                <span>Forgot password?</span><button>Click here</button>
                <p>By clicking on login button you are hereby agreeing to out Privacy policy and Terms and conditions</p>
                <button onClick={handlevalidate} >LOGIN</button>
                <p>Don't have an account? Sign up!</p>
            </section>
        </div>
    )
}
export default Appbar;
