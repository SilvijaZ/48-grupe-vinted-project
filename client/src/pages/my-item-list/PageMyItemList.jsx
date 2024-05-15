import { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from '../../components/header/Header.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function PageMyItemList(){

    const { myItems, deletedMyItem } = useContext(GlobalContext);

    function handleDeleteClickBtn(itemId){
       fetch('http://localhost:4824/api/items/' + itemId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       })
            .then(res => res.json())
            .then(data => {
                if(data.type === 'success'){
                    deletedMyItem(itemId);
                }
            })
            .catch(console.error);
    }
   

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <h1>Mano prekės</h1>
                    <Link className={style.btn3} to="/account/my-item-list/create">Įkelti naują prekę</Link>
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
                           {myItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={item.img} alt="prekė" style={{height: '80px'}} /></td>
                                    <td><Link to={'/item-list/' + item.id}>{item.name}</Link></td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link className='btn btn-sm btn-primary' to={`/account/my-item-list/${item.id}/edit`}>Edit</Link>
                                        <button onClick={() => handleDeleteClickBtn(item.id)}>Delete</button>
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