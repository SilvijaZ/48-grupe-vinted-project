import logo from '../../assets/img/logo.svg';
import style from './logo.module.css';
 
function Logo(){
    return (
        <img className={style.logo} src={logo} alt="Logo" />
    );
}
 
 
export { Logo };