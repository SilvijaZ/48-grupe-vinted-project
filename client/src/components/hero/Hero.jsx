import { useContext } from 'react';
import style from './Hero.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import style2 from '../header/Header.module.css';


export function Hero(){
    const {loginStatus, updateLoginStatus} = useContext(GlobalContext);

    function handleBtnClick(){
        updateLoginStatus(false);
    }

    const userSee = (
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button onClick={handleBtnClick} type="button" className={style2.btn3}>
                <Link className={style.link} to="/account/register">
                    Įkelti prekę 
                </Link>
            </button>
        </div>
    );

    return(
    <>  
     
     <div className={`container`}>

            <div className="modal modal-sheet position-static me-5 d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
        
                <div className={`container position-static mw-100 d-flex ${style.heroImg} p-5`}>

                    <div className={`${style.table}`}>
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header border-bottom-0">
                            <h1>Atėjo metas atlaisvinti vietos spintoje?</h1>
                            </div>
                            {!loginStatus ?  userSee : null}
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>


            
             {/* <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
                 <div className="modal-dialog" role="document">
                     <div className="modal-content rounded-4 shadow">
                     <div className="modal-header border-bottom-0">
                         <h1 className="modal-title fs-5">Modal title</h1>
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div className="modal-body py-0">
                         <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
                     </div>
                     <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                         <button type="button" className="btn btn-lg btn-primary">Save changes</button>
                         <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                     </div>
                 </div>
             </div> */}
        </>
    );
}