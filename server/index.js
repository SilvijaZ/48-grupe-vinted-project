import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';


const app = express();

const corsOptions = {
    origin: 'http://localhost:4825',
};

const helmetOptions = {
    crossOriginResourcePolicy: false
};

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(helmet(helmetOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// const data = [
//     {
//         id: 1,
//         name: 'Prekės pavadinimas 1',
//         img: 'http://localhost:4824/img/knygos1.jpeg',
//         price: 2,
//         category: 'knyga'
//     },
//     {
//         id: 2,
//         name: 'Prekės pavadinimas 2',
//         img: 'http://localhost:4824/img/knygos2.jpeg',
//         price: 1.50,
//         category: 'knyga'
//     },
//     {
//         id: 3,
//         name: 'Prekės pavadinimas 3',
//         img: 'http://localhost:4824/img/knygos3.jpeg',
//         price: 3,
//         category: 'knyga'
//     },
//     {
//         id: 4,
//         name: 'Prekės pavadinimas 4',
//         img: 'http://localhost:4824/img/knygos4.jpeg',
//         price: 8,
//         category: 'knyga'
//     },
// ];


// app.get('/api/knygos-list/:category', (req, res) => {
//     const { category } = req.params;
//     const filteredPrekes = prekes.filter(preke => preke.category === category);
//     return res.send(JSON.stringify({
//         list: filteredPrekes
//     }));
// });

app.get('/api/pramogos-list', (req, res) => {
    return res.send(JSON.stringify({
        pramogosList: prekes
    }));
});


app.get('*', (req, res) => {
    console.log('404');
    return res.send('404 page');
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(4824, () => {
    console.log(`http://localhost:4824`);
});