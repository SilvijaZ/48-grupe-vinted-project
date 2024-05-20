import express from 'express';
import { connection } from '../../db.js';

const itemsRouter = express.Router();



itemsRouter.get('/all', async (req, res) => {
    try{
        const selectQ = `SELECT * FROM items;`;
        const dbResponse = await connection.execute(selectQ);
    
        // masyvas list grizina rezultata
        return res.send(JSON.stringify({
            type: 'success',
            list: dbResponse[0],
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma gauti visas prekes',
        }));
    }
});

itemsRouter.get('/newest', async (req, res) => {
    const maxCount = 6;

    try{
        // LIMIT grazina 6 naujausias prekes pagal data
        const selectQ = `SELECT * FROM items ORDER BY created_on DESC LIMIT ?;`;
        const dbResponse = await connection.execute(selectQ, [maxCount]);
    
        return res.send(JSON.stringify({
            type: 'success',
            list: dbResponse[0],
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma gauti naujausias prekes',
        }));
        
    }
});



itemsRouter.get('/:itemId', async (req, res, next) => {
    const {itemId} = req.params;

    if (itemId === '/my') {
        return next();
    }


    try{
        // vieno konkretaus prekės paieška pagal id
        const selectQ = `SELECT * FROM items WHERE id = ?;`;
        const dbResponse = await connection.execute(selectQ, [itemId]);
    

        // tuscia, tokio skelbimo nera arba jis neegistuoja, arba buvo istrintas
        if(dbResponse[0].length === 0){
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Tokia prekė neegzistuoja',
            }));
        }

        return res.send(JSON.stringify({
            type: 'success',
            item: dbResponse[0][0],  // masyvo pirma reiksme istraukiama
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma sukurti prekes skelbimą',
        }));
    }
});


itemsRouter.use((req, res, next) => {
    if (req.user.role === 'public') {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Login to use this API endpoint',
        }));
    }

    next();
});


itemsRouter.get('/my', async (req, res) => {
    const userId = req.user.id;


    try{
        const selectQ = `SELECT * FROM items WHERE userId = ?;`;
        const dbResponse = await connection.execute(selectQ, [userId]);

        // gali gauti tuscia arba ne tuscia masyva...ką gaunam tą ir atiduodam.
        return res.send(JSON.stringify({
            type: 'success',
            list: dbResponse[0],
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma sukurti prekės skelbimą',
        }));
    }
});


itemsRouter.post('/create', async (req, res) => {
    const { name, price, image } = req.body;
    // console.log(userId, name, price);


     // Name likvidacijos
    if (typeof name !== 'string') {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Pavadinimas turi būti tekstas',
        }));
    }

    if (name.length > 50) {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Pavadinimas gali būti iki 100 raidžių',
        }));
    }

    if (name.length === 0) {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Pavadinimas negali būti tuščias',
        }));
    }

    if (!/^[a-zA-Z\s']+$/.test(name)) {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Pavadinimas gali turėti tik raides, tarpus ir kabutes',
        }));
    }

    // PRIMINIMAS!!!
    // Price likvidacijos, bet nezinia ar suveikia, veliau patikrinti

    // if (typeof price !== 'number') {
    //     return res.send(JSON.stringify({
    //         type: 'error',
    //         message: 'Kaina turi būti skaičius',
    //     }));
    // }


    // if (price <= 0) {
    //     return res.send(JSON.stringify({
    //         type: 'error',
    //         message: 'Kaina turi būti teigiamas skaičius',
    //     }));
    // }

 
    // Irasome preke su Insert
    // Dauginam * 100 nes su centais mes norime matyti
    try{
        const insertQ = `INSERT INTO items (userId, name, img, price) VALUES (?, ?, ?, ?);`;
        const dbResponse = await connection.execute(insertQ, [req.user.id, name, image, price * 100]);

        // tikrina ar tik yra vienas user, negali buti tokie patys su tokiu pat vardu ir slaptazodziu.
        
        if(dbResponse[0].affectedRows === 0){
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Prekės negalima sukurti arba rastas dublikatas',
            }));
        }

        // Jeigu i affectedRows irase 1, tai zinom kad sukure viena item skelbima.
        // Grazinam obj israsom reiksmes kurias turim, id yra pakistas po dbResponse[0].insertId.
       if(dbResponse[0].affectedRows === 1){
            return res.send(JSON.stringify({
                type: 'success',
                message: 'Prekė sukurta',
                item: {
                    id: dbResponse[0].insertId,
                    name,
                    price,
                    img: image,
                }
            }));
        }
        
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma sukurti prekės skelbimą',
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma sukurti pardavimui prekę',
        }));
        
    }
});



itemsRouter.put('/:itemId', async (req, res) => {
    const { itemId } = req.params;
    const { name, price, image } = req.body;
    const userId = req.user.id;

    try {
        const selectQ = `SELECT * FROM items WHERE id = ? AND userId = ?;`;
        const dbResponse = await connection.execute(selectQ, [carId, userId]);

        if (dbResponse[0].length === 0) {
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Such item does not exist',
            }));
        }

        if (dbResponse[0].length > 1) {
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Corrupted data',
            }));
        }

    } catch (error) {
        console.error(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Critical error while trying to get item details',
        }));
    }

    try {
        const updateQ = `UPDATE items SET name = ?, price = ?, img = ? WHERE id = ?;`;
        const dbResponse = await connection.execute(updateQ, [name, price, image, itemId]);

        if (dbResponse.affectedRows === 0) {
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Critical error while trying to update car details',
            }));
        }

        if (dbResponse.affectedRows > 1) {
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Item details updated, but with some unexpected side effects',
            }));
        }

        return res.send(JSON.stringify({
            type: 'success',
            message: 'Item details updated',
        }));
    } catch (error) {
        console.error(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Critical error while trying to update item details',
        }));
    }
});


itemsRouter.delete('/:itemId', async (req, res) => {
    const {itemId} = req.params;

    try{
        const deleteQ = `DELETE FROM items WHERE id = ?;`;
        const dbResponse = await connection.execute(deleteQ, [itemId]);
        
        // console.log(dbResponse);
    
        // Jeigu affectedRows === 0, nepavyko istrinti nes ji neegiztuoja, arba tiesiog jau buvo istrinta...
        if(dbResponse[0].affectedRows === 0){
            return res.send(JSON.stringify({
                type: 'success',
                message: 'Prekės negalima ištrinti, nes ji neegzistuoja',
            }));
        }
        
        // Istrina skelbima
        return res.send(JSON.stringify({
            type: 'success',
            message: 'Prekė ištrinta',
        }));

    } catch (error){
        console.log(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Error, kai buvo bandoma istrinti prekės skelbimą',
        }));
    }
});

export {itemsRouter};



