import { connection } from "../../db.js";

export async function apiLoginGet(req, res) {
    // console.log(req.cookies);  // parodo koki cookie gaunam ta loginCookieValue reiskme

    const cookieSize = 20;

    // Jei nėra sringas ir nėra 20
    if (typeof req.cookies.loginToken !== 'string'
        || req.cookies.loginToken.length !== cookieSize) {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Login cookie is invalid',
            loggedIn: false,
        }));
    }

    try {
        const selectQ = 'SELECT userId FROM login_token WHERE token = ?;';
        const dbResponse = await connection.execute(selectQ, [req.cookies.loginToken]);

        // dublikatai rasti
        if (dbResponse[0].length !== 1) {
            return res.send(JSON.stringify({
                type: 'error',
                message: 'Not logged in',
                loggedIn: false,
            }));
        }

        // id: dbResponse[0][0].userId  - [ { userId: 11 } ] istraukia skaiciu 11
        return res.send(JSON.stringify({
            type: 'success',
            message: 'Logged in',
            user: {
                id: dbResponse[0][0].userId,
            },
            loggedIn: true,
        }));
    } catch (error) {
        console.error(error);
    }

    return res.send(JSON.stringify({
        type: 'error',
        message: 'Something wrong with Api, sorry...',
        loggedIn: false,
    }));
}
