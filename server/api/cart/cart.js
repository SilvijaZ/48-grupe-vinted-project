import express from 'express';

const cartRouter = express.Router();


cartRouter.get('/cart-items', (req, res) => {
    return res.send(JSON.stringify({
        data: [
            {
                id: 1,
                name: 'Ugly Love knyga',
                img: 'http://localhost:4824/img/knygos1.jpeg',
                price: 2,
                category: 'knyga',
                uploadTime: 5,
                description: 'Gera kokybė, beveik nenešiota prekė, be trūkumų',
                city: 'Kaunas',
                pay: 'Mokėjimo kortele'
            },
            {
                id: 2,
                name: 'Mažasis Princas knyga',
                img: 'http://localhost:4824/img/knygos2.jpeg',
                price: 3,
                category: 'knyga',
                uploadTime: 19,
                description: 'Su defektais',
                city: 'Jonava',
                pay: 'Mokėjimo kortele'
            },
            {
                id: 3,
                name: 'Tu turi ką apsirengti knyga',
                img: 'http://localhost:4824/img/knygos3.jpeg',
                price: 10,
                category: 'knyga',
                uploadTime: 53,
                description: 'Gera kokybė, nauja',
                city: 'Vilnius',
                pay: 'Mokėjimo kortele'
            },
        ],
    }));
});

export { cartRouter };