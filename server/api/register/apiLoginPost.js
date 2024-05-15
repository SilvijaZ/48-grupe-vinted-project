import { connection } from '../../db.js';
import { hash } from "../../lib/hash.js";
import { randomString } from "../../lib/randomString.js";

export async function apiLoginPost(req, res){
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
            message: `Password cant be empty`,
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


    let userObj = null;
    
    try {
        const selectQ = `SELECT * FROM users WHERE email = ? AND password = ?;`;
        const dbResponse = await connection.execute(selectQ, [email, hash(password)]);

        // User toks egistuoja
        if (dbResponse[0].length === 0) {
            return res.send(JSON.stringify({
                message: 'Such user does not exist >>>>',
                loggedIn: false,
            }));
        // User prilogina
        } else if (dbResponse[0].length === 1) {
            userObj = dbResponse[0][0];
        // User galbut randamas dublikatas ar kazkas kitko
        } else {
        // Error code 1252, reiskia stringas - message turi buti unikalus, negali buti vienodi.
            return res.send(JSON.stringify({
                message: 'Problems while trying to login',
                loggedIn: false,
            }));
        }
    } catch (error) {
        console.error(error);

        return res.send(JSON.stringify({
            message: 'Could not find this user',
            loggedIn: false,
        }));
    }

    const loginCookieValue = randomString(20);

    try {
        const insertQ = `INSERT INTO login_token (userId, cookie) VALUES (?, ?);`;
        const dbResponse = await connection.execute(insertQ, [userObj.id, loginCookieValue]);

        // sukurti dublikatai
        if (dbResponse[0].affectedRows !== 1) {
            return res.send(JSON.stringify({
                message: 'Problems while trying to login user',
                loggedIn: false,
            }));
        }
    } catch (error) {
        console.error(error);

        // 
        return res.send(JSON.stringify({
            message: 'Problems while trying to login user',
            loggedIn: false,
        }));
    }

    // document.cookie istrauki reiksme
    // cookie keliauja kartu su skelbimu, cookie gaunam string kai prisilogini
    // cookie skirtas narsyklei
    const cookie = [
        'loginCookieValue=' + randomString(20),
        'domain=localhost',
        'path=/',
        'max-age=' + 30*60,
        // 'Secure',
        'SameSite=Lax',
        'HttpOnly',  // js nematys cookies
    ].join('; ');

    // sekmingu atveju prisilogini, narsykle isiraso i atminti cookie - Set-Cookie
    return res.set('Set-Cookie', cookie).send(JSON.stringify({
        message: 'Welcome, User',
        loggedIn: true,
        userId: userObj.id,
    }));


}
