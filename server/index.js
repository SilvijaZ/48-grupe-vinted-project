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


// const prekės = [
//     {
//         id: 1,
//         name: 'Ugly Love knyga',
//         img: 'http://localhost:4824/img/knygos1.jpeg',
//         price: 2,
//         category: 'knyga',
//         uploadTime: 5,
//         description: 'Gera kokybė, beveik nenešiota prekė, be trūkumų',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 2,
//         name: 'Mažasis Princas knyga',
//         img: 'http://localhost:4824/img/knygos2.jpeg',
//         price: 3,
//         category: 'knyga',
//         uploadTime: 19,
//         description: 'Su defektais',
//         city: 'Jonava',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 3,
//         name: 'Tu turi ką apsirengti knyga',
//         img: 'http://localhost:4824/img/knygos3.jpeg',
//         price: 10,
//         category: 'knyga',
//         uploadTime: 53,
//         description: 'Gera kokybė, nauja',
//         city: 'Vilnius',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 4,
//         name: 'Išsvajota dukra knyga',
//         img: 'http://localhost:4824/img/knygos4.jpeg',
//         price: 16,
//         category: 'knyga',
//         uploadTime: 3,
//         description: 'Gera kokybė, nauja',
//         city: 'Vilnius',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 5,
//         name: 'Pažadu tau laisvę knyga',
//         img: 'http://localhost:4824/img/knygos5.jpeg',
//         price: 15,
//         category: 'knyga',
//         uploadTime: 15,
//         description: 'Nauja',
//         city: 'Klaipėda',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 6,
//         name: 'Ausinės Roseland',
//         img: 'http://localhost:4824/img/muz1.jpeg',
//         price: 9,
//         category: 'muzika',
//         uploadTime: 15,
//         description: 'Naudotos, truputį su defektais',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 7,
//         name: 'Hedwig And The Angry Inch - Angry Inch',
//         img: 'http://localhost:4824/img/muz2.jpeg',
//         price: 9,
//         category: 'muzika',
//         uploadTime: 5,
//         description: 'Kasetės Hard House stiliaus iš US, naujas tracklist',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 8,
//         name: 'DVD dainų kasetės',
//         img: 'http://localhost:4824/img/muz3.jpeg',
//         price: 25,
//         category: 'muzika',
//         uploadTime: 5,
//         description: 'gera būklė',
//         city: 'Šiauliai',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 9,
//         name: 'Beyonce',
//         img: 'http://localhost:4824/img/muz4.jpeg',
//         price: 25,
//         category: 'muzika',
//         uploadTime: 9.96,
//         description: 'gera būklė',
//         city: 'Panevėžys',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 10,
//         name: 'Amy',
//         img: 'http://localhost:4824/img/muz5.jpeg',
//         price: 25,
//         category: 'muzika',
//         uploadTime: 4,
//         description: 'gera būklė',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 11,
//         name: 'Klaviatūra',
//         img: 'http://localhost:4824/img/vaiz1.jpeg',
//         price: 15,
//         category: 'PC-zaidimai',
//         uploadTime: 6,
//         description: 'gera būklė, naudota klaviatūra',
//         city: 'Lenkija',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 12,
//         name: 'Telefono dėkliukas',
//         img: 'http://localhost:4824/img/vaiz2.jpeg',
//         price: 12.58,
//         category: 'PC-zaidimai',
//         uploadTime: 6,
//         description: 'gera būklė, modelis Iphone 14 plus',
//         city: 'Šiauliai',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 13,
//         name: 'Promotional poster',
//         img: 'http://localhost:4824/img/vaiz3.jpeg',
//         price: 4,
//         category: 'PC-zaidimai',
//         uploadTime: 10,
//         description: 'GTA Grand Theft Auto Liberty City Stories A2 Promotional Poster',
//         city: 'Šiauliai',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 14,
//         name: 'Dead Alliance vaizdo žaidimas',
//         img: 'http://localhost:4824/img/vaiz4.jpeg',
//         price: 9,
//         category: 'PC-zaidimai',
//         uploadTime: 12,
//         description: 'Dead Alliance: Day One Edition - Xbox One',
//         city: 'Mažeikiai',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 15,
//         name: 'Cabelas Dangerous Hunts vaizdo žaidimas',
//         img: 'http://localhost:4824/img/vaiz5.jpeg',
//         price: 4.50,
//         category: 'PC-zaidimai',
//         uploadTime: 12,
//         description: 'Top Shot Elite Gun Xbox 360/Xbox One / Series X',
//         city: 'Marijampolė',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 16,
//         name: 'Monopoly žaidimas',
//         img: 'http://localhost:4824/img/zaid1.jpeg',
//         price: 7,
//         category: 'zaidimai',
//         uploadTime: 10,
//         description: 'gera būklė',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 17,
//         name: 'Elite trainer box',
//         img: 'http://localhost:4824/img/zaid2.jpeg',
//         price: 1.50,
//         category: 'zaidimai',
//         uploadTime: 10,
//         description: 'gera būklė',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 18,
//         name: 'Uno žaidimas',
//         img: 'http://localhost:4824/img/zaid3.jpeg',
//         price: 3.50,
//         category: 'zaidimai',
//         uploadTime: 10,
//         description: 'nebloga būklė, kai kurios kortos turi defektų',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 19,
//         name: 'Uno/No mercy žaidimas',
//         img: 'http://localhost:4824/img/zaid4.jpeg',
//         price: 8.50,
//         category: 'zaidimai',
//         uploadTime: 15,
//         description: 'Kai kurios kortos turi defektų',
//         city: 'Kaunas',
//         pay: 'Mokėjimo kortele'
//     },
//     {
//         id: 20,
//         name: 'Dėlionė',
//         img: 'http://localhost:4824/img/zaid5.jpeg',
//         price: 1.50,
//         category: 'zaidimai',
//         uploadTime: 3,
//         description: 'gera',
//         city: 'Druskininkai',
//         pay: 'Mokėjimo kortele'
//     }
// ];


// Informacija isisaugojam i masyva
// const users = [];


app.post('/api/register', (req, res) => {

    // Patikrinam ar backend gauna zinute i terminal
    // console.log('GET: Register API'); i terminal
    // console.log(req.body); i terminal, gaunam kliento parasyta email ir slaptazodi i backend
    // users.push(req.body);
    // console.log(users); is masyvo ipusinam vartotojo email ir slaptazodi, bet jie nuolat bus pildomi is naujo, tai reikia for cikla const user of users
    // return res.send(JSON.stringify({
    //     message: 'GET: Register API' issiunciama i front ir ar gauna ta response is backend i network
    // }));

    let isUniqueUserEmail = true;
    const {email, password } = req.body;

    for (const user of users){
        if(user.email === email){  // jeigu dublikatas tai sako kad neunikalus ir tada breakina sustoja ciklas   let isUniqueUserEmail = false;
            isUniqueUserEmail = false;
            break;
        }
    }

    // kai yra unikalus vartotojo duomenys
    if(isUniqueUserEmail){
        users.push({
            id: ++lastUserId,
            email,
            password,
            prekės: [],
        });

        //jeigu yra skirtingi tai ipushina objektus i masyva
        console.log(users);

        return res.send(JSON.stringify({
            type: 'success',
            message: 'User successfully registered'
        }));
    }

        return res.send(JSON.stringify({
            type: 'error',
            message: 'User already exists'  // jau bus dublikatas ir jo neatspausdins
        }));
});

// neleidzia prisijungti is pirmo karto!

app.post('/api/login', (req, res) => {
    console.log('LOGIN:', req.body);

    let userId = -1;
    const {email, password } = req.body;

    // tikrina ar vartotojo email ir password egzistuoja, jeigu randi ji

    for(const user of users){
        if(user.email === email && user.password === password){
            userId = user.id;  // is req.body info iesko vartotojo
            break;
        }
    }

    if(userId > 0){
        return res.send(JSON.stringify({
            message: 'User successfully logged in',
            loggedIn: true,
            userId,
        }));
    }
    return res.send(JSON.stringify({
        message: 'Such user does not exist',
        loggedIn: false,
    }));
});

// pramogos puslapis
app.get('/api/pramogos-list', (req, res) => {
    return res.send(JSON.stringify({
        pramogosList: prekės
    }));
});



// Vartotojas prisjunges ikelia skelbima

let lastUserId = 0;

// Vartotoju duomenys:
const users = [];


let lastItemId = 0;
// Vartotojo preke, pagal id turi atrasti ir preke ir vartotoja
let prekės = [];


app.get('/api/cart-items', (req, res) => {
    return res.send(JSON.stringify({
        prekės: [
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


app.post('/api/create-myitem', (req, res) => {

    const { userId, name, price } = req.body;

    prekės.push({
        userId,
        id: ++lastItemId,
        name,
        img: 'http://localhost:4824/img/knygos1.jpeg',
        price,
    });

    // console.log(req.body)

    for(const user of users){
        if(user.id === userId){
            user.prekės.push(lastItemId);
            console.log(user);
            break;
        }
    }

    return res.send(JSON.stringify({
        type: 'success',
        message: 'Item created',
        // NaujaPrekė: prekės[prekės.length - 1],
        naujaPrekė: prekės.at(-1),
    }));
});

// krepšelis
app.get('/api/my-items/:userId', (req, res) => {
    // kaip istraukti skirtingus vartotojų id
    console.log(req.params);

    // + konvertuoja is stringo i number, nes id number yra
    return res.send(JSON.stringify({
        list: prekės.filter(prekė => prekė.userId === +req.params.userId),
    }));
});

// Atskiros prekės info
app.get('/api/prekė/:prekėId', (req, res) => {
    return res.send(JSON.stringify({
        prekės: prekės.filter(prekė => prekė.id === +req.params.prekėId),
    }));
});

// istrinti preke pagal jos id
app.delete('/api/prekė/:prekėId', (req, res) => {
    prekės = prekės.filter(prekė => prekė.id !== +req.params.prekėId)
    return res.send(JSON.stringify({
        type: 'success',
        message: 'Prekė ištrinta',
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