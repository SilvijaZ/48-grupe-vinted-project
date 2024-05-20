import express from 'express';
import multer from 'multer';
import path from 'path';  // vidine biblioteka, kuri sugeba istraukti pletini, bet reikia gauti failo orginalu pavadinima.

export const uploadRouter = express.Router();

// isssaugojam diskStorage, cb - call back, funkcija????

uploadRouter.use((req, res, next) => {
    if (req.user.role === 'public') {
        return res.send(JSON.stringify({
            type: 'error',
            message: 'Login to use API endpoint',
        }));
    }
    next();
});


const itemStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/upload/item');
    },

    // kiekviena karta upload nuotrauka, ji prides data, tai bus unikalus vardai.
    filename: (req, file, cb) => {
        // console.log(file.originalname); orginalus pavadinimas
        cb(null, 'item_' + Date.now() + path.extname(file.originalname));
    },
});

const itemUpload = multer({
    storage: itemStorage,
    limits: {
        // fileSize: 1_000_000,
        // fileSize: 1000000,
        fileSize: 1e6,
    }
});

//
uploadRouter.use('/item', itemUpload.single('item_default_image'), (req, res) => {
    return res.send(JSON.stringify({
            type: 'success',
            message: 'Item uploaded',
            imgPath: 'http://localhost:4824/img/upload/item/' + req.file.filename,
    }));
});



// NUOTRAUKU UPLOAD PROFILIO USER NUOTRAUKOS IŠ PASKAITOS 05-06 dienos!!!