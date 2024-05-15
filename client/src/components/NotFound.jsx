
import imgErr from '../../src/assets/img/err.jpg';
import style from '../../src/pages/my-item-list/Items.module.css';

export function NotFound(){
    return (
        <> 
            <div className="container align-items-center">
                <div className='d-flex row col-md-5 align-items-center'>               
                        <h1 className={style.h1Err}>Error</h1>
                        <p className={style.pErr}>Page not found</p>
                        <a className={style.aErr} href="/">click me...</a>
                        <img className={style.imgErr} src={imgErr} alt="Error image" />
                </div>
            </div>
        </>
    );
}