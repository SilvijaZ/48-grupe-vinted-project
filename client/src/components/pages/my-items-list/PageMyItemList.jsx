import { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from '../../header/Header.module.css';
import { GlobalContext } from '../../../content/GlobalContext';
// import { useEffect } from 'react';

export function PageMyItemList(){

    // visas sarasas! Bet turi buti tik mano prekės

    const { manoPrekės, deletedMyItem } = useContext(GlobalContext);

    function handleDeleteClickBtn(prekėId){
       fetch('http://localhost:4824/api/prekė/' + prekėId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       })
            .then(res => res.json())
            .then(data => {
                if(data.type === 'success'){
                    deletedMyItem(prekėId);
                }
            })
            .catch(console.error);
    }
   

    // useEffect(() => {
    //     if(myItems.length === 0){
    //         fetch('http://localhost:4824/api/my-items')
    //             .then(res => res.json())
    //             .then(data => updateMyItems(data.myList))
    //             .catch(console.error);
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [myItems]);




    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <h1>Mano prekės</h1>
                    <Link className={style.btn3} to="/account/my-items/create">Įkelti naują prekę</Link>
                </div>
                <div className='row'>
                    <div className="table-responsive small">
                        <table className="table table-striped">
                        <thead className='table-dark'>
                            <tr className='h5'>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                           {manoPrekės.map(prekė => (
                                <tr key={prekė.id}>
                                    <td>{prekė.id}</td>
                                    <td><img src={prekė.img} alt="prekė" style={{height: '80px'}} /></td>
                                    <td><Link to={`http://localhost:4824/api/my-items/${prekė.id}`}>{prekė.name}</Link></td>
                                    <td>{prekė.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteClickBtn(prekė.id)}>Delete</button>
                                    </td>
                                </tr>
                           ))} 
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}