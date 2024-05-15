import { connection } from '../../db.js';  // rysys su duombaze
import { hash } from "../../lib/hash.js";


export async function apiRegisterPost(req, res){
 
    const { email, password } = req.body;

    // likvidacijos:
    const minEmailLength = 6;
    const maxEmailLength = 50;
    const minPasswordLength = 4;
    const maxPasswordLength = 100;
    const etaSymbol = "@";
    


    if(typeof email !== 'string'){
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Email has to be string value',
        }));    
    }


    if(email.length < minEmailLength){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Email is too short, at least ${minEmailLength} symbols`,
        }));    
    }

    
    if(email.length > maxEmailLength ){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Email is too long, at least ${maxEmailLength} symbols`,
        }));    
    }


    if(!email.includes(etaSymbol)){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Email dont have, at least ${etaSymbol} symbols`,
        })); 
    }

    if(email.includes(' ')){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Email dont have gaps`,
        })); 
    }


    if(typeof password !== 'string'){
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Password has to be string value',
        }));    
    }

    if(password.length === 0){
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Password cant be empty',
        }));
    }

    if(password.length < minPasswordLength){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Password dont have at least ${minPasswordLength} symbols`,
        }));
    }

    if(password.length > maxPasswordLength){
        return res.send(JSON.stringify({
            type: 'error',
            message: `Password have ${maxPasswordLength} symbols limit`,
        }));
    }


    // ? kintamasis kuris keiciasi, kai irasome i placeholderi
    // SELECT naudojamas kai norime kad user ssuieskotu pagal user email
    // SQL INJECTION 

    try {
        const SelectQ = `SELECT * FROM users WHERE email = ?;`;
        const dbResponse = await connection.execute(SelectQ, [email]);

        // dbResponse[0] = jeigu tucias masyvas, vadinasi galima registruoti
        // dbResponse[0] = jeigu ne tucias masyvas, vadinasi negalima, nes jau yra toks user


        // Jau toks user yra
        if(dbResponse[0].length > 0){
            return res.send(JSON.stringify({
                type: 'error',
                message: 'User already exists',
            }));
        }

    } catch (error){
        // Problemos su duomboze, bet toliau eina prie insert toliau, nesustoja kodas. 
        // Taip vykdo catch.
        console.error(error);

        return res.send(JSON.stringify({
            type: 'error',
            message: 'Problems while trying to register a user, sorry...'
        }));
    }

   

    // Kaip uzregistruoti vartotoja? Su Insert

    try {
        const insertQ = `INSERT INTO users (email, password) VALUES (?, ?);`;
        const dbResponse = await connection.execute(insertQ, [email, hash(password)]);

        // console.log(dbResponse);  //grizta masyvas, jame 1 dalis yra objektas, jame masyvas ka mes padarem - iraso padarymas, o 2 dalyje INSERT lenteles tos ka paselect kiekvieno stulpelio strukturos.

        // tikrina ar yra tik vienas user, daugiau uz viena negali buti
        if(dbResponse[0].affectedRows !== 1){
            return res.send(JSON.stringify({
                type: 'error',
                message: 'User could not be registered',
            }));
        }


        // sekmingu atveju user registruojasi
        return res.send(JSON.stringify({
            type: 'successs',
            message: 'User successfully registered',
        }));

    } catch (error){
        console.error(error);
    }

    // cia error jei nė vieno nepagauna virsuje
    return res.send(JSON.stringify({
        type: 'error',
        message: 'Problems while trying to register a user, sorry :( ...',
    }));
    
}