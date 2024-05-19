import { useState } from 'react';
import { Alert } from '../../components/alert/Alert';
import style from './Register.module.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export function PageRegister() {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [repeatpassword, setPasswordRepeat] = useState('');


    const [responseText, setResponseText] = useState('');
    const [responseType, setResponseType] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRepeatChange(e) {
        setPasswordRepeat(e.target.value);
    }

    function isPasswordVisible(){
        setIsVisible(!isVisible);
    }


    function isValidEmail(text){
        if(text.length < 6){
            return'per trumpas'; 
        }

        if(text.length > 50){
            return 'per ilgas';
        }

        if(!text.includes('@')){
            return 'reikia įrašyti @ simbolį';
        }

        if(text.includes(' ')){
            return 'negali būti tarpų';
        }

        const forbiddenSymbols = ['.', ',', '!', '?', '@', '-', '_'];
        if (forbiddenSymbols.some(symbol => text.startsWith(symbol))) {
            return 'negalima rašyti adreso pradžioje įvairių simbolių';
        }

        // const domain = ['name@eaxmple'];
        // if (!text.split('@')[0].split('.').every(part => domain.includes(part))) {
        //     return 'paskyroje turi būti @domain.com dalis';
        // }
        
        // const dotCount = (text.match(/\./g)).length;
        // if (dotCount > 1) {
        //     return 'taškas gali būti tik prieš lt arba com';
        // }

        return true;
    }
    

    function isValidPassword(text){
        if(text.length > 8){
            return 'slaptažodis turi turėti tik 8 simbolius';
        }

        if(!/[A-Z]/.test(text)){
            return 'slaptažodyje turi būti bent viena didžioji raidė';
        }
       
        if(!/d/.test(text)){
            return 'slaptažodyje turi būti bent vienas skaičius';
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
            const emailErrValue = isValidEmail(email);
            const passwordErrValue = isValidPassword(password);
    
            let isAllFromValid = true;
    
            if(isValidEmail(email) !== true){
                isAllFromValid = false;
                setEmailErr(emailErrValue);
            } else{
                setEmailErr('');
            }
    
            if(isValidPassword(password) !== true){
                isAllFromValid = false;
                setPasswordErr(passwordErrValue);
            } else{
                setPasswordErr('');
            }
    
            if(password !== repeatpassword){
                isAllFromValid = false;
                setPasswordErr('blogas slaptažodis');
            } else{
                setPasswordErr('');
            }
    
            if(isAllFromValid){
                console.log('Super :)')
            }

            if (email === '' || password === '' || repeatpassword === '' || password !== repeatpassword) {
                console.error('ERROR: blogi formos duomenys');
                return;
            }
   

        fetch('http://localhost:4824/api/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
           
            body: JSON.stringify({ email, password }), // gaunam json objekta email ir password
        })
                .then(res => res.json())
                .then(data => {
                    setResponseType(data.type)  // index.js message: Sorry can't find that!
                    setResponseText(data.message)
                })
                .catch(err => {
                    console.log(err);
                    setResponseType('error');
                    setResponseText('Error is kliento puses');
                });
    }


    return (
        <div className="container p-5">
            <form onSubmit={handleFormSubmit} className={`${style.form} col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2`}>

                <h1 className={style.h1}>Register</h1>        
                <div className={`${style.div}`}>
                    <label className={style.label} htmlFor="">Email</label>
                    <input className={`${style.input} form-control`} onChange={handleEmailChange} type="email" value={email} placeholder="name@example.com" />
                    {emailErr.length === 0 ? null : <p className={style.error}>{emailErr}</p>}  
                </div>

                <div className={`${style.div}`}>
                    <label className={style.label} htmlFor="">Password</label>
                    <input className={`${style.eyeInput} form-control`} onChange={handlePasswordChange} type={isVisible ? 'text': 'password'} value={password} placeholder="enter your password" />
                    {passwordErr.length === 0 ? null : <p className={style.error}>{passwordErr}</p>}  
                </div>

                <div className={`${style.div}`}>
                    <label className={style.label} htmlFor="">Repeat password</label>
                    <input className={`${style.eyeInput} form-control`} onChange={handleRepeatChange} type={isVisible ? 'text': 'password'} value={repeatpassword} placeholder="enter your password" />
                    <span className={style.eyeIcon} onClick={isPasswordVisible}>{isVisible ? <FaEye size="1.4rem"/> : <FaEyeSlash size="1.4rem"/> }</span>
                    {passwordErr.length === 0 ? null : <p className={style.error}>{passwordErr}</p>}  
                </div>

                <Alert type={responseType} text={responseText} />

                <div className={style.div}>
                    <button className={style.button} type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}



{/* <div className={`${style.div}`}>
<label className={style.label} htmlFor="">Password</label>
<input className={`${style.input} form-control`} onChange={handlePasswordChange} type="password" value={password} placeholder="enter your password" />
{passwordErr.length === 0 ? null : <p className={style.error}>{passwordErr}</p>}
</div> */}