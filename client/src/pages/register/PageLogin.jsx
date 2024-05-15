import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from '../../components/alert/Alert';
import style from './Register.module.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";


export function PageLogin() {
    // panaudojam funkcija kai is pradziu buvai initialContext reiksme false, bet kai ji bus true kai vartotojas prisijungs.
    const {updateLoginStatus, updateUserId} = useContext(GlobalContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseText, setResponseText] = useState('');
    const [responseType, setResponseType] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function isPasswordVisible(){
        setIsVisible(!isVisible);
    }
 
    function handleFormSubmit(e){
        e.preventDefault();

        if(email == '' || password == ''){
            setResponseType('Blogi formos duomenys');
            return;
        }

        fetch('http://localhost:4824/api/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',  // autorizacija, suteikiam leidima dirbti su cookies
            body: JSON.stringify({ email, password }),
        })
            .then(res => res.json())
            .then(data => {
                setResponseText(data.message);
                setResponseType(data.loggedIn ? 'success' : 'error');

                if(data.loggedIn === true){
                    updateLoginStatus(true);  // jau esi prisijungęs, naviguosi i savo paskyra
                    updateUserId(data.userId);  // Global context  userId
                    navigate('/account');
                    // navigate('/shop-cart');  
                    // kai prisijungi ismes ta puslapi kuri nurodai pvz. account
                }
            })
            .catch(error => {
                console.log(error);
                setResponseType('error');
                setResponseText('Error is kliento puses'); 
            });
    }


    
    return (
            <div className="container">
                <form onSubmit={handleFormSubmit} className={`${style.form} col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2 col-xxl-4 offset-xxl-4`}>

                    <h1 className={style.h1}>Login</h1>

                    <div className={`${style.div}`}>
                        <label className={style.label} htmlFor="">Email</label>
                        <input className={`${style.input} form-control`} onChange={handleEmailChange} type="email" value={email} placeholder="name@example.com" />
                    </div>

                    <div className={`${style.div}`}>
                        <label className={style.label} htmlFor="">Password</label>
                        <input className={`${style.eyeInput} form-control`} onChange={handlePasswordChange} type={isVisible ? 'text': 'password'} value={password} placeholder="enter your password" />
                        <span className={style.eyeIcon} onClick={isPasswordVisible}>{isVisible ? <FaEye size="1.4rem"/> : <FaEyeSlash size="1.4rem"/> }</span>
                    </div>

                    <div className={style.div}>
                        <button className={style.button} type="submit">Login In</button>
                    </div>

                    <Alert type={responseType} text={responseText} />
                </form>
            </div>
    );
}