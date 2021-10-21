const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello again again and again')
})

const users = [
    { id: 0, name: 'max', address: 'tongi', phone: '234232' },
    { id: 1, name: 'jax', address: 'dhaka', phone: '34344' },
    { id: 2, name: 'rex', address: 'ctg', phone: '34333' },
    { id: 3, name: 'tex', address: 'sylhet', phone: '99776' },
    { id: 4, name: 'fex', address: 'bogura', phone: '343432' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.get(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'bananas', 'apples'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('i like fruits specially mangoes, fazli')
})

app.listen(port, () => {
    console.log('Listening to', port)
})